const monsterData = {
  "ドラゴンクエストII": [
    { name: "じごくのつかい", drop: "まどうしのつえ", rate: 0.0625 }
  ],
  "ドラゴンクエストIII": [
    { name: "くさったしたい", drop: "どくけしそう", rate: 0.12 }
  ],
  "ドラゴンクエストIV": [
    { name: "エビルプリースト", drop: "まほうのせいすい", rate: 0.05 }
  ],
  "ドラゴンクエストV": [
    { name: "キラーパンサー", drop: "いのちのきのみ", rate: 0.08 }
  ],
  "ドラゴンクエストV": [
    { name: "ジャミ", drop: "ちいさなメダル", rate: 0.0002 }
  ],
  "ドラゴンクエストVI": [
    { name: "ホイミスライム", drop: "せいすい", rate: 0.1 }
  ],
  "ドラゴンクエストVII": [
    { name: "プラチナキング", drop: "プラチナソード", rate: 0.01 }
  ],
  "ドラゴンクエストVIII": [
    { name: "なげきの亡霊", drop: "まもりのたね", rate: 0.06 }
  ],
  "ドラゴンクエストIX": [
    { name: "メタルキング", drop: "メタルのかけら", rate: 0.04 }
  ],
  "ドラゴンクエストX": [
    { name: "バザックス", drop: "まじゅうの皮", rate: 0.07 }
  ],
  "ドラゴンクエストXI": [
    { name: "ブラウニー・邪", drop: "ちからのたね", rate: 0.004 }
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
せいすいせいすい