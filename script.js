const LASTFRECNO = document.querySelector('.last-frecno');
    const FRECNOHOLDER = document.querySelector('.frecno-holder');
    const DISPLAYGENERATED = document.querySelector('.display-generated');
 
    const GENERATEBUTTON = document.querySelector('.generate-button');
    GENERATEBUTTON.addEventListener('click', e => {
      const parts = FRECNOHOLDER.value.split('\n');
      let latestFrecno = LASTFRECNO.value;
      let generatedScript = `UPDATE pos_sale\nSET frecno =\nCASE frecno`;
 
      for (let i = 0; i < parts.length; i++) {
        generatedScript += `\n\tWHEN '${parts[i]}' THEN '${latestFrecno++}'`;
      }
 
      generatedScript += `\nELSE frecno\nEND;`;
 
      DISPLAYGENERATED.innerHTML = generatedScript;
    });
 
    const COPYBUTTON = document.querySelector('.copy-button');
    COPYBUTTON.addEventListener('click', e => {
      DISPLAYGENERATED.select();
      DISPLAYGENERATED.setSelectionRange(0, 99999);
 
      try {
        const successful = document.execCommand('copy');
 
        if (successful) alert('Copied');
        else alert('Copy failed. Please try manually.');
       
      } catch (err) {
        alert('Oops, unable to copy');
      }
 
    });