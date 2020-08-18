COVID-19 Chart
====

## Description
ポートフォリオを1週間かけて作ってみました。

サーバー：gRPC(golang)　covid19apiを読み込み、APIサービスを提供 ./app

フロント：gRPC-web　APIサーバーにリクエストしたデータを表示(React/TypeScript/Sass) ./app/client

プロキシ：envoy　gRPC-webを使うため使用している ./proxy

インフラ：GCP

[アプリURL](http://34.85.86.75)




