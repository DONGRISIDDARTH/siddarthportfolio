    // ===== Tiny site JS (no frameworks) =====
    const state = {
      topSkills:["Machine Learning","Edge/Cloud Systems","REST APIs","Data Engineering"],
      skillsCode:["C","C++","JavaScript","Python","Java","SQL","Git","GitHub","VS Code","Jupyter","Google Colab","IBM Watson Studio"],
      skillsStack:["TensorFlow","Scikit‑Learn","Pandas","NumPy","Matplotlib","Streamlit","REST API","MySQL","MongoDB"],
      projects:[
        {
          title:"Cross‑Modal Classification (Text + Image)",
          period:"Jan 2024 – Mar 2024",
          summary:"Unified classifier combining CNN for images with BERT + HANs for text, reaching 85% accuracy.",
          links:[{label:"Code", href:"https://github.com/DONGRISIDDARTH/Cross-Modal-Classification-with-Text-and-Image-Data"}],
          tags:["BERT","HANs","CNN","InceptionResNetV2","Multimodal"]
        },
        {
          title:"IoT Real‑Time Health Monitoring",
          period:"Feb 2024 – May 2024",
          summary:"Hypothermia detection pipeline with RFID simulations, temperature monitoring, NoSQL backend, REST API + Streamlit UI.",
          links:[{label:"Code", href:"https://github.com/DONGRISIDDARTH/IoT-Enabled-Health-Devices-for-Real-time-Health-Monitoring"}],
          tags:["Embedded C","RFID","Contiki‑NG","NoSQL","REST API","Streamlit"]
        },
        {
          title:"Optimized Task Scheduling in Cloud‑Edge (M.Tech Research)",
          period:"Jul 2024 – Apr 2025",
          summary:"Reinforcement Learning (DDPG) + EdgeSimPy/EdgeAISim to cut latency, response time, rejections & energy.",
          links:[{label:"Overview", href:"#"}],
          tags:["Reinforcement Learning","DDPG","EdgeSimPy","EdgeAISim"]
        },
        {
          title:"Loan Status ML – Benchmarking",
          period:"Jul – Oct 2022",
          summary:"Compared KNN, Decision Tree, SVM, Logistic Regression; SVM topped with ~80% accuracy.",
          links:[{label:"Code", href:"https://github.com/DONGRISIDDARTH/Machine-Learning-Project-Classification-of-Loan-Status-Using-ML-Algorithms-"}],
          tags:["SVM","KNN","Decision Tree","Logistic Regression"]
        }
      ]
    };

    // Populate top skills
    const pillHost = document.getElementById('topSkills');
    state.topSkills.forEach(s=>{const el=document.createElement('div');el.className='pill';el.textContent=s;pillHost.appendChild(el)});

    // Populate skill tags
    const addTags=(arr,hostId)=>{const host=document.getElementById(hostId);arr.forEach(t=>{const el=document.createElement('span');el.className='tag';el.textContent=t;host.appendChild(el)})};
    addTags(state.skillsCode,'skillsCode');
    addTags(state.skillsStack,'skillsStack');

    // Render projects
    const grid=document.getElementById('projectGrid');
    state.projects.forEach(p=>{
      const card=document.createElement('article');card.className='card pad project';
      const h=document.createElement('h3');h.textContent=p.title;card.appendChild(h);
      const small=document.createElement('p');small.className='muted';small.textContent=p.period;card.appendChild(small);
      const desc=document.createElement('p');desc.textContent=p.summary;card.appendChild(desc);
      const meta=document.createElement('div');meta.className='meta';
      p.tags.forEach(tag=>{const t=document.createElement('span');t.className='tag';t.textContent=tag;meta.appendChild(t)});
      card.appendChild(meta);
      const links=document.createElement('div');links.className='row';
      p.links.forEach(l=>{const a=document.createElement('a');a.className='btn';a.href=l.href;a.target='_blank';a.rel='noreferrer';a.textContent=l.label;links.appendChild(a)});
      card.appendChild(links);
      grid.appendChild(card);
    });

    // Theme toggle
    const themeToggle=document.getElementById('themeToggle');
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const saved=localStorage.getItem('theme');
    if(saved==='light' || (!saved && prefersLight)){document.body.classList.add('light'); themeToggle.checked=true}
    themeToggle.addEventListener('change',()=>{
      document.body.classList.toggle('light');
      localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    });

    // Footer year
    document.getElementById('year').textContent=new Date().getFullYear();

    // Resume link – point to resume.pdf in the same folder by default
    const resumePath = 'https://drive.google.com/file/d/1EWjMsiHqsn4SHzHEtnT-Be2Fv-JmKfOX/view?usp=sharing';
    document.getElementById('resumeLink').href = resumePath;
    document.getElementById('resumeLink2').href = resumePath;
