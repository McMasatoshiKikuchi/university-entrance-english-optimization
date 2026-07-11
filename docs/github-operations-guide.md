---
layout: default
title: GitHub運用手順書
---

# GitHub運用手順書

## 1. 目的

この手順書は、`university-entrance-english-optimization` の資料、データ、GitHub Pagesを安全かつ一貫して更新するための運営者向け文書です。

一般閲覧者向けの説明は[一般利用者向け利用案内](user-guide.md)、表示上の問題は[トラブル対処](troubleshooting.md)を参照してください。

## 2. 利用者区分

| 区分 | GitHubアカウント | 主な操作 |
| --- | --- | --- |
| 一般閲覧者 | 不要 | Pagesで資料を読む |
| 学習記録利用者 | 不要 | 手元のノートや表計算ソフトへ記録する |
| 運営者・共同編集者 | 必要 | 資料、CSV、Issue、Pagesを管理する |

Issue作成、ファイル編集、変更履歴の登録にはGitHubへのログインが必要です。

## 3. フォルダの役割

| 場所 | 内容 | 主な更新者 |
| --- | --- | --- |
| `README.md` | 入口、全体像、主要リンク | 運営者 |
| `ROADMAP.md` | 完了・未完了項目 | 運営者 |
| `docs/` | 設計、診断、学習、運用文書 | 運営者・監修者 |
| `data/` | CSV形式の定義・記録 | 運営者・分析担当 |
| `templates/` | 診断・週次計画などのひな型 | 運営者 |
| `examples/` | 架空の利用例 | 運営者 |
| `.github/ISSUE_TEMPLATE/` | GitHub Issue用テンプレート | 運営者 |
| `_layouts/` | Pagesの共通画面 | サイト管理者 |
| `assets/` | Pagesの表示・Mermaid処理 | サイト管理者 |
| `_config.yml` | Pages全体の設定 | サイト管理者 |

## 4. 通常の更新手順

1. 更新する資料と目的を決めます。
2. 根拠が必要な情報は公式資料を確認し、`data/sources.csv`へ出典を記録します。
3. GitHub上で対象ファイルを開き、編集します。
4. プレビューで見出し、表、リンク、箇条書きを確認します。
5. 変更内容を短いメッセージで登録します。
6. GitHub Pagesへの反映を待ちます。
7. Pages上で対象ページと関連リンクを確認します。
8. 必要に応じて`ROADMAP.md`を更新します。

変更メッセージ例:

- `Clarify diagnostic scoring rules`
- `Add university exam profile fields`
- `Fix Pages navigation link`

一つの変更メッセージに無関係な修正を混ぜないでください。

## 5. Markdown資料の追加

Pagesで表示するMarkdown資料の先頭には、次の設定を入れます。

```yaml
---
layout: default
title: ページ名
---
```

その後に、`#`から始まる本文タイトルを記述します。READMEや他資料からリンクする場合、リポジトリ内では原則として`.md`への相対リンクを使います。Pages側で`.html`へ変換されます。

`.github/`内のファイルは一般向けPages資料ではありません。Pagesの閲覧リンクとして直接指定しないでください。

## 6. Mermaid図の更新

Mermaid図は次の形式でMarkdown内に記述します。

````markdown
```mermaid
flowchart LR
    A["診断"] --> B["優先順位"]
    B --> C["学習"]
```
````

更新後は次を確認します。

- GitHub上で図として表示される
- Pages上でも図として表示される
- ノードの文字が切れていない
- スマートフォン幅で横スクロールできる
- `assets/js/mermaid-init.js`を削除・無効化していない

## 7. CSVの更新

- 1行目の列名を変更しない
- 文字コードはUTF-8を使用する
- IDは既存規則に合わせ、重複させない
- 空欄とゼロを区別する
- 単位を列名または仕様書で明示する
- 実在する生徒の個人情報を保存しない
- 市販問題や過去問本文を保存しない
- 公式情報には出典URLと確認日を残す

構造を変更する場合は、関連する仕様書、テンプレート、例も同時に確認します。

## 8. 学習実験Issueの運用

[学習実験Issue](https://github.com/McMasatoshiKikuchi/university-entrance-english-optimization/issues/new?template=learning-experiment.md)は、運営者・共同編集者が仮説、介入、結果、判断を追跡するために使用します。作成にはGitHubログインが必要です。

1. テンプレートからIssueを作成します。
2. 個人を特定できない`student_id`またはケースIDを使います。
3. 実施前に主指標、予測、成功条件を記入します。
4. 実施時間と交絡要因を記録します。
5. 結果を`supported`、`rejected`、`inconclusive`などで判定します。
6. 継続・変更・停止の判断を記録してIssueを閉じます。

一般利用者へIssue作成を必須にしないでください。

## 9. Pagesの公開確認

更新後、反映まで数分かかることがあります。次を確認します。

- トップページが開く
- 更新した見出しと本文が表示される
- Markdown記号が生データで表示されない
- 内部リンクが404にならない
- Mermaid図が表示される
- 表が画面幅からはみ出しても横スクロールできる
- GitHubログインが必要なリンクには、その旨が明記されている

## 10. 公開前チェック

- [ ] 内容が大学受験英語の範囲内である
- [ ] 事実、仮説、暫定値を区別している
- [ ] 最新情報が必要な箇所に公式出典がある
- [ ] 個人情報が含まれていない
- [ ] 著作権のある問題本文・画像を転載していない
- [ ] 関連資料との用語・能力コードが一致している
- [ ] GitHubとPagesの両方で表示を確認した
- [ ] リンク切れがない
- [ ] ROADMAP更新の要否を確認した

## 11. 変更してはいけないもの

理由と影響を確認せず、次を削除・変更しないでください。

- `_config.yml`
- `_layouts/default.html`
- `assets/css/pages.css`
- `assets/js/mermaid-init.js`
- CSVの列名
- 能力コード
- 既存データのID

変更が必要な場合は、関連ページ、リンク、既存データへの影響を確認してから実施します。
