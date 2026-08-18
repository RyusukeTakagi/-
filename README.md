# 栄養記録アプリ — iPhoneホーム画面インストール手順

このフォルダには、ビルド不要でそのまま動く静的Webアプリ(HTML/CSS/JS)が入っています。
データは全て**あなたのiPhone内(ブラウザのlocalStorage)**に保存されます。外部サーバーには一切送信されません。

## ファイル構成
- `index.html` … アプリ本体
- `app.js` … ロジック
- `manifest.json` / `sw.js` … PWA設定(ホーム画面追加・オフライン対応用)
- `icon-180.png` / `icon-512.png` … アプリアイコン

## 1. GitHub Pagesで公開する(無料)

1. https://github.com にログイン(アカウントがなければ無料で作成)
2. 右上の「+」→「New repository」で新しいリポジトリを作成
   - Repository name: 例 `pfc-tracker`
   - Public を選択
   - 「Create repository」をクリック
3. 作成したリポジトリのページで「uploading an existing file」(または `Add file` → `Upload files`)をクリック
4. このフォルダの中身(`index.html`, `app.js`, `manifest.json`, `sw.js`, `icon-180.png`, `icon-512.png`)を全てドラッグ&ドロップ
5. 下の「Commit changes」をクリックしてアップロード
6. リポジトリの `Settings` タブ → 左メニューの `Pages` を開く
7. 「Build and deployment」の `Source` を `Deploy from a branch` にし、Branch を `main` / `/(root)` に設定して `Save`
8. 数十秒〜数分待つと、ページ上部に公開URLが表示されます
   - 例: `https://ユーザー名.github.io/pfc-tracker/`

## 2. iPhoneのホーム画面に追加する

1. iPhoneの **Safari**(Chromeなど他ブラウザは不可)で、上記の公開URLを開く
2. 画面下の共有アイコン(四角から矢印が上に出ているマーク)をタップ
3. メニューを下にスクロールして「ホーム画面に追加」をタップ
4. 名前を確認して「追加」をタップ

これでホーム画面にアイコンが追加され、タップするとアドレスバーなしのアプリのような見た目で起動します。データは自動でオフラインでも使えるようキャッシュされます。

## 3. 更新したいとき

コードを修正した場合は、GitHubのリポジトリ内で該当ファイルを編集(またはアップロードし直す)すれば、数分後に同じURLへ反映されます。ホーム画面のアイコンは再インストール不要です。

## 4. 注意点

- データは端末のブラウザストレージに保存されるため、**Safariの「履歴とWebサイトデータを消去」を行うと記録が消えます**。定期的にバックアップを取りたい場合は、将来的にエクスポート機能の追加も可能です。
- 複数の端末間でデータは同期されません(この端末だけのローカル保存です)。
