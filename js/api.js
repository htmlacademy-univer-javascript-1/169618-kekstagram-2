async function getMiniatures(){
  return fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((r) => r.json());
}

async function sendForm(body){
  return fetch('https://26.javascript.pages.academy/kekstagram', {
    method: 'POST',
    body: body
  });
}

export{getMiniatures,sendForm};
