(function () {
  'use strict';

  // ---------- Storage ----------
  const STORAGE_KEY = 'rcst:v1';

  const defaultState = {
    studied: {},        // term -> true (seen at least once)
    mastered: {},       // term -> true ("I know this")
    review: {},         // term -> true ("Need review")
    quiz: {
      taken: 0,
      bestScore: null,  // 0..10
      totalAnswered: 0,
      totalCorrect: 0
    }
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return clone(defaultState);
      const parsed = JSON.parse(raw);
      return Object.assign(clone(defaultState), parsed, {
        quiz: Object.assign({}, defaultState.quiz, parsed.quiz || {})
      });
    } catch (e) {
      return clone(defaultState);
    }
  }
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  let state = loadState();

  // ---------- Helpers ----------
  function categories() {
    const set = new Set(TERMS.map(t => t.category));
    return Array.from(set).sort();
  }

  function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function pickRandom(arr, n, exclude) {
    const pool = arr.filter(x => !exclude || !exclude.includes(x));
    shuffleInPlace(pool);
    return pool.slice(0, n);
  }

  function findTerm(name) {
    return TERMS.find(t => t.term === name);
  }

  function fillCategorySelect(select, includeAll) {
    select.innerHTML = '';
    if (includeAll) {
      const opt = document.createElement('option');
      opt.value = '__all__';
      opt.textContent = 'All categories';
      select.appendChild(opt);
    }
    categories().forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      select.appendChild(opt);
    });
  }

  // ---------- Tabs ----------
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => {
        const active = t === tab;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      panels.forEach(p => p.classList.toggle('active', p.id === target));
      if (target === 'progress') renderProgress();
      if (target === 'glossary') renderGlossary();
      if (target === 'flashcards') document.getElementById('flashcard').focus();
    });
  });

  // ---------- Flashcards ----------
  const fcCategory = document.getElementById('fc-category');
  const fcOnlyReview = document.getElementById('fc-only-review');
  const fcShuffle = document.getElementById('fc-shuffle');
  const fcCard = document.getElementById('flashcard');
  const fcFrontText = document.getElementById('fc-front-text');
  const fcFrontCat = document.getElementById('fc-front-cat');
  const fcBackText = document.getElementById('fc-back-text');
  const fcBackCat = document.getElementById('fc-back-cat');
  const fcPosition = document.getElementById('fc-position');
  const fcPrev = document.getElementById('fc-prev');
  const fcFlip = document.getElementById('fc-flip');
  const fcNext = document.getElementById('fc-next');
  const fcKnow = document.getElementById('fc-know');
  const fcReview = document.getElementById('fc-review');

  let fcDeck = [];
  let fcIndex = 0;

  fillCategorySelect(fcCategory, true);

  function buildDeck() {
    const cat = fcCategory.value;
    let pool = TERMS.slice();
    if (cat !== '__all__') pool = pool.filter(t => t.category === cat);
    if (fcOnlyReview.checked) pool = pool.filter(t => state.review[t.term]);
    fcDeck = pool;
    fcIndex = 0;
    renderCard();
  }

  function renderCard() {
    fcCard.classList.remove('flipped');
    if (fcDeck.length === 0) {
      fcFrontText.textContent = 'No cards in this view.';
      fcBackText.textContent = '';
      fcFrontCat.textContent = '';
      fcBackCat.textContent = '';
      fcPosition.textContent = '0 / 0';
      return;
    }
    if (fcIndex >= fcDeck.length) fcIndex = 0;
    if (fcIndex < 0) fcIndex = fcDeck.length - 1;
    const card = fcDeck[fcIndex];
    fcFrontText.textContent = card.term;
    fcBackText.textContent = card.definition;
    fcFrontCat.textContent = card.category;
    fcBackCat.textContent = card.category;
    fcPosition.textContent = (fcIndex + 1) + ' / ' + fcDeck.length;

    if (!state.studied[card.term]) {
      state.studied[card.term] = true;
      saveState();
    }
  }

  function flip() {
    if (fcDeck.length === 0) return;
    fcCard.classList.toggle('flipped');
  }
  function next() { if (fcDeck.length === 0) return; fcIndex = (fcIndex + 1) % fcDeck.length; renderCard(); }
  function prev() { if (fcDeck.length === 0) return; fcIndex = (fcIndex - 1 + fcDeck.length) % fcDeck.length; renderCard(); }

  function markKnow() {
    if (fcDeck.length === 0) return;
    const card = fcDeck[fcIndex];
    state.mastered[card.term] = true;
    delete state.review[card.term];
    saveState();
    next();
  }
  function markReview() {
    if (fcDeck.length === 0) return;
    const card = fcDeck[fcIndex];
    state.review[card.term] = true;
    delete state.mastered[card.term];
    saveState();
    next();
  }

  fcCategory.addEventListener('change', buildDeck);
  fcOnlyReview.addEventListener('change', buildDeck);
  fcShuffle.addEventListener('click', () => { shuffleInPlace(fcDeck); fcIndex = 0; renderCard(); });
  fcPrev.addEventListener('click', prev);
  fcNext.addEventListener('click', next);
  fcFlip.addEventListener('click', flip);
  fcKnow.addEventListener('click', markKnow);
  fcReview.addEventListener('click', markReview);
  fcCard.addEventListener('click', flip);

  document.addEventListener('keydown', (e) => {
    const flashcardsOpen = document.getElementById('flashcards').classList.contains('active');
    if (!flashcardsOpen) return;
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    else if (e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); flip(); }
    else if (e.key === 'k' || e.key === 'K') { markKnow(); }
    else if (e.key === 'r' || e.key === 'R') { markReview(); }
  });

  buildDeck();

  // ---------- Quiz ----------
  const quizCategory = document.getElementById('quiz-category');
  const quizBegin = document.getElementById('quiz-begin');
  const quizStart = document.getElementById('quiz-start');
  const quizStage = document.getElementById('quiz-stage');
  const quizResults = document.getElementById('quiz-results');
  const quizPromptLabel = document.getElementById('quiz-prompt-label');
  const quizQuestion = document.getElementById('quiz-question');
  const quizChoices = document.getElementById('quiz-choices');
  const quizSubmit = document.getElementById('quiz-submit');
  const quizNext = document.getElementById('quiz-next');
  const quizFeedback = document.getElementById('quiz-feedback');
  const quizCounter = document.getElementById('quiz-counter');
  const quizScore = document.getElementById('quiz-score');
  const quizReviewList = document.getElementById('quiz-review-list');
  const quizRestart = document.getElementById('quiz-restart');

  fillCategorySelect(quizCategory, true);

  let quizQs = [];
  let quizI = 0;
  let quizCorrect = 0;
  let quizSelectedIdx = null;
  let quizAnsweredThis = false;
  let quizMistakes = []; // { question, correctAnswer, picked }

  function buildQuizQuestions(category) {
    let pool = TERMS.slice();
    if (category !== '__all__') pool = pool.filter(t => t.category === category);
    if (pool.length < 4) {
      pool = TERMS.slice();
    }
    const count = Math.min(10, pool.length);
    const picked = pickRandom(pool, count);
    return picked.map(t => buildSingleQuestion(t, pool));
  }

  function buildSingleQuestion(answer, pool) {
    const direction = Math.random() < 0.5 ? 'term-to-def' : 'def-to-term';
    const distractorPool = pool.filter(p => p.term !== answer.term);
    const distractors = pickRandom(distractorPool, 3);
    const choices = shuffleInPlace([answer, ...distractors]);
    const correctIndex = choices.findIndex(c => c.term === answer.term);
    return {
      direction,
      answer,
      choices,
      correctIndex
    };
  }

  function startQuiz() {
    quizQs = buildQuizQuestions(quizCategory.value);
    quizI = 0;
    quizCorrect = 0;
    quizMistakes = [];
    quizStart.classList.add('hidden');
    quizResults.classList.add('hidden');
    quizStage.classList.remove('hidden');
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    quizSelectedIdx = null;
    quizAnsweredThis = false;
    quizFeedback.classList.remove('show');
    quizFeedback.innerHTML = '';
    quizSubmit.disabled = true;
    quizSubmit.classList.remove('hidden');
    quizNext.classList.add('hidden');

    const q = quizQs[quizI];
    quizCounter.textContent = (quizI + 1) + ' / ' + quizQs.length;

    if (q.direction === 'term-to-def') {
      quizPromptLabel.textContent = 'Which definition matches this term?';
      quizQuestion.textContent = q.answer.term;
    } else {
      quizPromptLabel.textContent = 'Which term matches this definition?';
      quizQuestion.textContent = q.answer.definition;
    }

    quizChoices.innerHTML = '';
    q.choices.forEach((choice, idx) => {
      const li = document.createElement('li');
      const label = document.createElement('label');
      label.className = 'choice';
      label.dataset.idx = String(idx);

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'q-' + quizI;
      input.value = String(idx);

      const span = document.createElement('span');
      span.textContent = q.direction === 'term-to-def' ? choice.definition : choice.term;

      input.addEventListener('change', () => {
        quizSelectedIdx = idx;
        quizSubmit.disabled = false;
        document.querySelectorAll('#quiz-choices .choice').forEach(el => el.classList.remove('selected'));
        label.classList.add('selected');
      });

      label.appendChild(input);
      label.appendChild(span);
      li.appendChild(label);
      quizChoices.appendChild(li);
    });
  }

  function submitAnswer() {
    if (quizSelectedIdx == null || quizAnsweredThis) return;
    quizAnsweredThis = true;
    const q = quizQs[quizI];
    const isCorrect = quizSelectedIdx === q.correctIndex;
    const labels = document.querySelectorAll('#quiz-choices .choice');
    labels.forEach((label, idx) => {
      label.classList.add('locked');
      label.classList.remove('selected');
      if (idx === q.correctIndex) label.classList.add('correct');
      else if (idx === quizSelectedIdx) label.classList.add('wrong');
    });

    state.quiz.totalAnswered = (state.quiz.totalAnswered || 0) + 1;
    if (isCorrect) {
      quizCorrect++;
      state.quiz.totalCorrect = (state.quiz.totalCorrect || 0) + 1;
      delete state.review[q.answer.term];
      state.mastered[q.answer.term] = true;
      quizFeedback.innerHTML = '<strong>Correct.</strong>';
    } else {
      state.review[q.answer.term] = true;
      delete state.mastered[q.answer.term];
      quizMistakes.push({
        question: q.direction === 'term-to-def' ? q.answer.term : q.answer.definition,
        correctAnswer: q.direction === 'term-to-def' ? q.answer.definition : q.answer.term,
        picked: q.direction === 'term-to-def' ? q.choices[quizSelectedIdx].definition : q.choices[quizSelectedIdx].term,
        term: q.answer.term,
        category: q.answer.category
      });
      quizFeedback.innerHTML = '<strong>Not quite.</strong> Correct answer: ' +
        escapeHtml(q.direction === 'term-to-def' ? q.answer.definition : q.answer.term);
    }
    state.studied[q.answer.term] = true;
    saveState();
    quizFeedback.classList.add('show');
    quizSubmit.classList.add('hidden');
    quizNext.classList.remove('hidden');
    quizNext.textContent = quizI + 1 >= quizQs.length ? 'See results' : 'Next';
  }

  function nextQuestion() {
    quizI++;
    if (quizI >= quizQs.length) finishQuiz();
    else renderQuizQuestion();
  }

  function finishQuiz() {
    state.quiz.taken = (state.quiz.taken || 0) + 1;
    if (state.quiz.bestScore == null || quizCorrect > state.quiz.bestScore) {
      state.quiz.bestScore = quizCorrect;
    }
    saveState();

    quizStage.classList.add('hidden');
    quizResults.classList.remove('hidden');
    quizScore.textContent = quizCorrect + ' / ' + quizQs.length;
    quizReviewList.innerHTML = '';
    if (quizMistakes.length === 0) {
      const li = document.createElement('li');
      li.innerHTML = '<span class="rl-term">Perfect score.</span>';
      quizReviewList.appendChild(li);
    } else {
      quizMistakes.forEach(m => {
        const li = document.createElement('li');
        li.innerHTML =
          '<span class="rl-term">' + escapeHtml(m.term) + '</span>' +
          '<span class="rl-cat">' + escapeHtml(m.category) + '</span>' +
          '<span class="rl-def"><em>Correct:</em> ' + escapeHtml(m.correctAnswer) + '</span>';
        quizReviewList.appendChild(li);
      });
    }
  }

  quizBegin.addEventListener('click', startQuiz);
  quizSubmit.addEventListener('click', submitAnswer);
  quizNext.addEventListener('click', nextQuestion);
  quizRestart.addEventListener('click', () => {
    quizResults.classList.add('hidden');
    quizStart.classList.remove('hidden');
    quizCounter.textContent = '—';
  });

  // ---------- Glossary ----------
  const glSearch = document.getElementById('gl-search');
  const glCategory = document.getElementById('gl-category');
  const glList = document.getElementById('gl-list');
  const glCount = document.getElementById('gl-count');

  fillCategorySelect(glCategory, true);

  function renderGlossary() {
    const q = (glSearch.value || '').trim().toLowerCase();
    const cat = glCategory.value;
    let items = TERMS.slice();
    if (cat && cat !== '__all__') items = items.filter(t => t.category === cat);
    if (q) {
      items = items.filter(t =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
      );
    }
    items.sort((a, b) => a.term.localeCompare(b.term));
    glCount.textContent = String(items.length);
    glList.innerHTML = '';
    if (items.length === 0) {
      const li = document.createElement('li');
      li.className = 'gl-empty';
      li.textContent = 'No matches.';
      glList.appendChild(li);
      return;
    }
    items.forEach(t => {
      const li = document.createElement('li');
      li.className = 'gl-item';
      li.innerHTML =
        '<div class="gl-term"><strong>' + escapeHtml(t.term) + '</strong>' +
        '<span class="gl-cat">' + escapeHtml(t.category) + '</span></div>' +
        '<p class="gl-def">' + escapeHtml(t.definition) + '</p>';
      glList.appendChild(li);
    });
  }

  glSearch.addEventListener('input', renderGlossary);
  glCategory.addEventListener('change', renderGlossary);
  renderGlossary();

  // ---------- Progress ----------
  const statStudied = document.getElementById('stat-studied');
  const statStudiedMeta = document.getElementById('stat-studied-meta');
  const statMastered = document.getElementById('stat-mastered');
  const statMasteredMeta = document.getElementById('stat-mastered-meta');
  const statAccuracy = document.getElementById('stat-accuracy');
  const statAccuracyMeta = document.getElementById('stat-accuracy-meta');
  const statQuizzes = document.getElementById('stat-quizzes');
  const statQuizzesMeta = document.getElementById('stat-quizzes-meta');
  const reviewList = document.getElementById('review-list');
  const masteredList = document.getElementById('mastered-list');
  const resetBtn = document.getElementById('reset-progress');

  function renderProgress() {
    const total = TERMS.length;
    const studiedCount = Object.keys(state.studied).filter(k => findTerm(k)).length;
    const masteredCount = Object.keys(state.mastered).filter(k => findTerm(k)).length;
    statStudied.textContent = String(studiedCount);
    statStudiedMeta.textContent = 'of ' + total;
    statMastered.textContent = String(masteredCount);
    statMasteredMeta.textContent = 'of ' + total;

    const answered = state.quiz.totalAnswered || 0;
    const correct = state.quiz.totalCorrect || 0;
    statAccuracy.textContent = answered > 0 ? Math.round((correct / answered) * 100) + '%' : '—';
    statAccuracyMeta.textContent = answered + ' answered';
    statQuizzes.textContent = String(state.quiz.taken || 0);
    statQuizzesMeta.textContent = 'best: ' + (state.quiz.bestScore == null ? '—' : state.quiz.bestScore + ' / 10');

    renderTermList(reviewList, Object.keys(state.review), 'No terms flagged. Mark cards "Need review" or miss them in a quiz to populate this list.');
    renderTermList(masteredList, Object.keys(state.mastered), 'No mastered terms yet.');
  }

  function renderTermList(ul, names, emptyMsg) {
    ul.innerHTML = '';
    const items = names.map(findTerm).filter(Boolean).sort((a, b) => a.term.localeCompare(b.term));
    if (items.length === 0) {
      const li = document.createElement('li');
      li.className = 'review-empty';
      li.textContent = emptyMsg;
      ul.appendChild(li);
      return;
    }
    items.forEach(t => {
      const li = document.createElement('li');
      li.innerHTML =
        '<span class="rl-term">' + escapeHtml(t.term) + '</span>' +
        '<span class="rl-cat">' + escapeHtml(t.category) + '</span>' +
        '<span class="rl-def">' + escapeHtml(t.definition) + '</span>';
      ul.appendChild(li);
    });
  }

  resetBtn.addEventListener('click', () => {
    if (!confirm('Reset all progress? This cannot be undone.')) return;
    state = clone(defaultState);
    saveState();
    buildDeck();
    renderGlossary();
    renderProgress();
  });

  renderProgress();

  // ---------- Util ----------
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
})();
