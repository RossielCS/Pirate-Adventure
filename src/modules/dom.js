const creator = (parent, newElement, position) => {
  const child = document.createElement(`${newElement}`);
  if (position === 'append') {
    parent.appendChild(child);
  } else {
    parent.insertBefore(child, position);
  }
  return child;
};

const createTable = () => {
  // eslint-disable-next-line prefer-destructuring
  const container = document.getElementById('content').children[0];
  const table = creator(container, 'table', 'append');
  const tHead = creator(table, 'thead', 'append');
  tHead.setAttribute('id', 'tHead');
  const tBody = creator(table, 'tbody', 'append');
  tBody.setAttribute('id', 'tBody');
  const trOne = tHead.insertRow();
  const tHOne = creator(trOne, 'th', 'append');
  tHOne.innerHTML = 'USER';
  const tHTwo = creator(trOne, 'th', 'append');
  tHTwo.innerHTML = 'SCORE';
  return table;
};

const addValuesToTable = (scores) => {
  const body = document.getElementById('tBody');
  for (let i = 0; i < scores.length; i += 1) {
    const tr = creator(body, 'tr', 'append');
    const tdUser = creator(tr, 'td', 'append');
    tdUser.innerHTML = scores[i].user;
    const tdScore = creator(tr, 'td', 'append');
    tdScore.innerHTML = scores[i].score;
  }
};

export { createTable, addValuesToTable };