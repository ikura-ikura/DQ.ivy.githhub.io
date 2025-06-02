const monsterData = {
  "ドラゴンクエストII": [
    { name: "じごくのつかい", drop: "まどうしのつえ", rate: 0.0625 }
  ],
  "ドラゴンクエストIII": [
    { name: "くさったしたい", drop: "どくけしそう", rate: 0.12 }
  ],
  // 以下同様に追加…
};
function createMonsterCard(monster, seriesId) {
  return `
    <div class="monster">
      <h4>${monster.name}</h4>
      <p>レアドロップ: <strong>${monster.drop}</strong>（${(monster.rate * 100).toFixed(2)}%）</p>
      <button onclick="tryDrop('${monster.name}', ${monster.rate})">ドロップを試す！</button>
      <p id="result-${monster.name}" class="drop-result"></p>
    </div>
  `;
}
