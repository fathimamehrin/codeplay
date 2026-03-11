//////////////////////////////////////////
// 1️⃣ Fetch and display completed lessons
//////////////////////////////////////////

async function fetchCompletedLessons() {
  try {
    const response = await fetch('/user/completed-lessons'); // replace with your API endpoint
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    const completedLessons = data.completedLessons.map(Number); // ensure numbers

    // Add glow to each completed stage
    completedLessons.forEach(step => {
      const stage = document.querySelector(`.stage[data-step="${step}"]`);
      if (stage) stage.classList.add('completed');
    });
  } catch (err) {
    console.error('Failed to fetch completed lessons:', err);
  }
}

// Call on page load
fetchCompletedLessons();

//////////////////////////////////////////
// 2️⃣ Mark lesson as completed
//////////////////////////////////////////

async function completeLesson(step) {
  try {
    const response = await fetch('/user/complete-lesson', { // replace with your API endpoint
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ step })
    });

    if (response.ok) {
      // Add glow locally immediately
      const stage = document.querySelector(`.stage[data-step="${step}"]`);
      if (stage) stage.classList.add('completed');
    } else {
      console.error('Backend failed to save completed lesson');
    }
  } catch (err) {
    console.error('Failed to complete lesson:', err);
  }
}

//////////////////////////////////////////
// 3️⃣ Example usage
//////////////////////////////////////////

// When a user finishes lesson 5, call:
/// completeLesson(5);

// Optional: automatically mark the last lesson as current (highlight without glow)
function setCurrentLesson(step) {
  // Remove any previous current
  document.querySelectorAll('.stage.current').forEach(s => s.classList.remove('current'));

  const stage = document.querySelector(`.stage[data-step="${step}"]`);
  if (stage) stage.classList.add('current');
}