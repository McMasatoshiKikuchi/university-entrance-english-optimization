# university-entrance-english-optimization

日本の大学受験を目指す高校生について、限られた学習時間から英語の得点上昇と本番での再現性を最大化する方法を体系化するプロジェクトです。

このリポジトリは教材ランキングではありません。入試方式、現在の能力、残り期間、配点、学習可能時間をもとに、何をどの順番で学ぶかを決定できる仕組みを目指します。

## 対象

- 日本の大学受験を目指す高校生
- 基礎未完成から難関大学志望まで
- 共通テスト、国公立二次、私立一般、共通テスト利用、推薦・総合型
- 高校3年生を中心とし、高校1・2年生にも応用可能

## 最適化するもの

- 合格可能性
- 入試配点を考慮した英語得点
- 1時間当たりの期待得点上昇
- 本番での得点安定性
- 複数大学へ転用できる能力
- 学習の継続性

## 優先順位モデル

```text
学習優先度
= 期待得点上昇
× 入試での配点
× 他大学への転用性
× 本番までの緊急度
× 改善できる確率
÷ 必要学習時間
```

現段階では概念モデルです。今後、診断結果と学習記録を使って指標の定義と重みを検証します。

## 能力領域

| コード | 領域 | 概要 |
| --- | --- | --- |
| LEX | 語彙・熟語 | 語義、多義語、派生語、熟語、認識速度 |
| GRM | 文法・語法 | 文法形式、意味、語法、長文内での運用 |
| SYN | 英文解釈 | 文構造、修飾、省略、指示関係、和訳 |
| RDN | 長文読解 | 段落構造、論理関係、要旨、推論、速度 |
| QST | 設問処理 | 根拠特定、選択肢評価、記述条件 |
| LST | リスニング | 音声認識、意味処理、意図、図表、メモ |
| WRT | 英作文・記述 | 文生成、和文英訳、自由英作文、要約 |
| SPK | スピーキング | 明瞭性、応答、構成、相互作用、修復 |
| EXE | 試験実行力 | 時間配分、解答順、捨て問、見直し |
| META | 学習管理力 | 復習、再テスト、計画調整、継続 |

詳細は [大学受験英語 能力マップ](docs/ability-map.md) を参照してください。

## 診断システム

初回診断は、生徒を順位付けする試験ではありません。主要なボトルネックを特定し、次の4週間で優先する学習領域を決めます。

- [初回診断テスト仕様](docs/diagnostic-test-spec.md)
- [初期診断ルール](docs/diagnostic-rules.md)
- [診断モジュール表](data/diagnostic-items.csv)
- [診断結果データ形式](data/diagnostic-results.csv)
- [診断結果テンプレート](templates/diagnostic-result.md)

診断は正答率だけでなく、所要時間、確信度、文中への転用、24から72時間後の再現率を測定します。評価尺度は未検証の暫定値であり、大学の合否判定には直接使用しません。

## 入試方式との接続

入試を学校区分だけでなく、実際の問題形式へ分解して能力領域と対応させます。

- [入試方式と要求能力の対応](docs/exam-type-requirements.md)
- [入試方式別の暫定能力重み](data/exam-type-weights.csv)
- [大学・学部・方式別プロファイルCSV](data/university-exam-profiles.csv)
- [大学別分析テンプレート](templates/university-exam-profile.md)
- [公式資料一覧](data/sources.csv)

能力重み0から5は学習設計用の暫定仮説です。大学公式の配点ではなく、募集要項と過去問分析により大学・学部・方式・年度ごとに上書きします。

## 学習最適化

診断された能力差と入試形式から、次の1週間に使う時間を決定します。

- [学習優先度モデル](docs/priority-model.md)
- [能力別学習介入](docs/learning-interventions.md)
- [教材選定基準](docs/material-selection.md)
- [残り期間別ロードマップ](docs/time-horizon-roadmaps.md)
- [週次再計画ルール](docs/weekly-replanning.md)
- [優先度計算データ](data/priority-inputs.csv)
- [能力依存関係](data/ability-dependencies.csv)
- [教材評価データ](data/material-evaluations.csv)
- [週間最適化テンプレート](templates/weekly-optimization.md)

優先度は、能力差、入試重要度、転用性、改善可能性、期限、根拠の確かさ、次のレベルに必要な時間、能力間の依存関係から算出します。同時に扱う重点能力は原則2から3個です。

計算係数と必要時間の見積りは未検証の暫定値です。実際の得点変化と比較しながら校正します。

## 運用と検証

設計を実際の学習へ適用し、仮説・介入・結果を追跡します。

- [運用ワークフロー](docs/operating-workflow.md)
- [検証プロトコル](docs/validation-protocol.md)
- [個人情報・データ管理方針](docs/privacy-data-policy.md)
- [合成ケーススタディ](examples/synthetic-case-studies.md)
- [学習セッション](data/study-sessions.csv)
- [評価結果](data/assessments.csv)
- [失点履歴](data/error-log.csv)
- [仮説](data/hypotheses.csv)
- [介入実験](data/experiments.csv)
- [週次指標](data/weekly-metrics.csv)
- [過去問レビュー](templates/past-paper-review.md)
- [模試レビュー](templates/mock-exam-review.md)
- [学習実験Issue](https://github.com/McMasatoshiKikuchi/university-entrance-english-optimization/issues/new?template=learning-experiment.md)

合成ケーススタディは利用方法を説明する架空例であり、効果を実証するものではありません。実際の得点改善、係数の妥当性、他の生徒への一般化は今後の検証対象です。

## 基本方針

- 「英語が苦手」を能力単位の問題へ分解する。
- 偏差値だけでなく、正答率、処理時間、失点原因、再現率を測定する。
- 文法問題の正答と、長文内で文法を使える能力を分ける。
- 時間無制限の得点と制限時間内の得点を分ける。
- 教材を追加する前に、現在のボトルネックを特定する。
- 経験則、仮説、検証済み情報を区別する。
- 市販教材や過去問の本文・画像・PDFは登録しない。

## 現在の段階

- Phase 1 能力構造の定義: 完了
- Phase 2 診断仕様の設計: 完了
- 診断用の実問題作成と評価尺度の検証: 未完了
- Phase 3 入試方式との接続: 方式分類とデータ構造は完了
- 個別大学の公式情報・過去問プロファイル登録: 未完了
- Phase 4 学習最適化: 設計完了
- 優先度係数・教材評価・時間見積りの検証: 未完了
- Phase 5 運用と検証: 運用基盤は完成
- 実生徒データによる効果・妥当性検証: 未完了

詳細は [ROADMAP.md](ROADMAP.md) を参照してください。

## リポジトリ構成

```text
.
├─ README.md
├─ ROADMAP.md
├─ docs/
│  ├─ ability-map.md
│  ├─ diagnostic-rules.md
│  ├─ diagnostic-test-spec.md
│  ├─ exam-type-requirements.md
│  ├─ priority-model.md
│  ├─ learning-interventions.md
│  ├─ material-selection.md
│  ├─ time-horizon-roadmaps.md
│  ├─ weekly-replanning.md
│  ├─ operating-workflow.md
│  ├─ validation-protocol.md
│  └─ privacy-data-policy.md
├─ data/
│  ├─ ability-codes.csv
│  ├─ diagnostic-items.csv
│  ├─ diagnostic-results.csv
│  ├─ exam-type-weights.csv
│  ├─ university-exam-profiles.csv
│  ├─ priority-inputs.csv
│  ├─ ability-dependencies.csv
│  ├─ material-evaluations.csv
│  ├─ study-sessions.csv
│  ├─ assessments.csv
│  ├─ error-log.csv
│  ├─ hypotheses.csv
│  ├─ experiments.csv
│  ├─ weekly-metrics.csv
│  └─ sources.csv
├─ templates/
│  ├─ diagnostic-result.md
│  ├─ university-exam-profile.md
│  ├─ weekly-optimization.md
│  ├─ past-paper-review.md
│  └─ mock-exam-review.md
├─ examples/
│  └─ synthetic-case-studies.md
└─ .github/ISSUE_TEMPLATE/
   └─ learning-experiment.md
```

## 対象外

- 工学系大学生向けの専門英語教育
- 英会話一般の上達法
- 特定教材の無条件な順位付け
- 著作権のある問題本文や解答の転載
- 医学的・心理学的な診断
