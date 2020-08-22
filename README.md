COVID-19 Chart
====

## Description
Golangの勉強も兼ねて、ポートフォリオを1週間かけて作ってみました。

サーバー：gRPC(golang)　covid19apiを読み込み、APIサービスを提供 ./app

フロント：gRPC-web(React/TypeScript/Sass)　APIサーバーにリクエストしたデータを表示 ./app/client

プロキシ：envoy　gRPC-webを使うため使用している ./proxy

インフラ：GCP/GKE/Cloud Build

[アプリURL](http://34.85.86.75)




