const data = {
  readStanford: [
    {title: 'CS230: Deep Learning | Autumn 2025', url: 'https://lnkd.in/dQ-DHdsJ', notes: ''},
    {title: 'CS329H: Machine Learning from Human Preferences', url: 'https://lnkd.in/d_6GzDAr', notes: ''},
    {title: 'CS25: Transformers', url: 'https://lnkd.in/dbMtpim5', notes: ''},
    {title: 'CS231N: Deep Learning for Computer Vision | 2025', url: 'https://lnkd.in/djXeGyse', notes: ''},
    {title: 'CME295: LLM Evaluation | Autumn 2025', url: 'https://lnkd.in/dTPTwh_M', notes: ''},
    {title: 'CS336: Language Modeling from Scratch | 2025', url: 'https://lnkd.in/dthjnD7E', notes: ''}
  ],
  readHarvard: [
    {title: 'CS50: Introduction to Computer Science', url: 'https://cs50.harvard.edu/x/2026/', notes: 'Core algorithms, web development, and full-stack fundamentals.'},
    {title: 'CS50W: Web Programming with Python and JavaScript', url: 'https://cs50.harvard.edu/web/2026/', notes: 'Practical web app development with Flask, React, and APIs.'},
    {title: 'CS164: Software Engineering', url: 'https://cs164.cs.harvard.edu/', notes: 'Team workflows, architecture, and product delivery.'}
  ],
  readAnthropic: [
    {title: 'Anthropic Skills Learning Guide', url: 'https://www.anthropic.com/skills', notes: 'Structured learning paths for AI safety, systems, and product design.'},
    {title: 'Anthropic model use principles', url: 'https://www.anthropic.com/', notes: 'Best practices for building safe AI products.'},
    {title: 'Prompting fundamentals', url: '', notes: 'Tactics for prompt engineering and reliable model behavior.'}
  ],
  recordings: [],
  demos: [],
  ideas: []
}

function render() {
  renderList('readStanfordList', data.readStanford)
  renderList('readHarvardList', data.readHarvard)
  renderList('readAnthropicList', data.readAnthropic)
  renderList('recordingsList', data.recordings)
  renderList('demosList', data.demos)
  renderList('ideasList', data.ideas)
}

function renderList(elId, items) {
  const ul = document.getElementById(elId)
  ul.innerHTML = ''

  items.forEach(it => {
    const li = document.createElement('li')
    li.className = 'item'

    const content = document.createElement('div')
    const title = it.url ? document.createElement('a') : document.createElement('span')
    if (it.url) {
      title.href = it.url
      title.target = '_blank'
      title.rel = 'noopener noreferrer'
    }
    title.textContent = it.title
    content.appendChild(title)

    if (it.notes) {
      const meta = document.createElement('div')
      meta.className = 'meta'
      meta.textContent = it.notes
      content.appendChild(meta)
    }

    li.appendChild(content)
    ul.appendChild(li)
  })
}

render()
