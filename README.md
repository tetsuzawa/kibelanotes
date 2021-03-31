# kibelanotes

自分の書いたKibelaの記事一覧を取得するコマンド。
月ごとに日報全件取得したりするのに便利。

## 例

シンプルver

```
$ kibelanotes                                                                                                                                                                                                                                                                  Wed Mar 31 19:29:18 2021
{
  "data": {
    "currentUser": {
      "id": "xxxxxxxxxx",
      "account": "tetsu_takizawa",
      "realName": "瀧澤哲",
      "latestNotes": {
        "nodes": [
          {
            "title": "【日報】2021/03/31 tetsu_takizawa",
            "content": "# やった\n xxxxxxxxxxxxxx\n hugahuga\n"
          },
          {
            "title": "【日報】2021/03/31 tetsu_takizawa",
            "content": "# やった\n xxxxxxxxxxxxxx\n hugahuga\n"
          },
          {
            "title": "【日報】2021/03/31 tetsu_takizawa",
            "content": "# やった\n xxxxxxxxxxxxxx\n hugahuga\n"
          },
          {
            "title": "【日報】2021/03/31 tetsu_takizawa",
            "content": "# やった\n xxxxxxxxxxxxxx\n hugahuga\n"
          }
        ]
      }
    }
  }
}
```

jqで整形ver

```
$ kibelanotes | jq -r .data.currentUser.latestNotes.nodes[].content                                                                                                                                                                                                            Wed Mar 31 20:10:05 2021
# やった
 xxxxxxxxxxxxxx
 hugahuga

# やった
 xxxxxxxxxxxxxx
 hugahuga

# やった
 xxxxxxxxxxxxxx
 hugahuga

# やった
 xxxxxxxxxxxxxx
 hugahuga}
```



## 使い方

### 1. KibelaのAPIトークンの作成

[ここ](https://support.kibe.la/hc/ja/articles/360036089931-API%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%83%88%E3%83%BC%E3%82%AF%E3%83%B3%E3%81%AE%E5%8F%96%E5%BE%97%E6%96%B9%E6%B3%95%E3%82%92%E6%95%99%E3%81%88%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84-) を参考に作ってください。

### 2. 環境変数の設定

```shell
export KIBELA_TEAM=xxxxxxxxxxx # kibelaのサブドメイン `xxxholdings`など
export KIBELA_TOKEN=secret/xxxxxxxxxxxxxxxxxxxxxx # 生成したAPIトークン
```

### 3. Denoのインストール

Macなら

```shell
brew install deno
```

その他は[公式](https://github.com/denoland/deno) を参照してください。

4. コマンドのインストール


```shell
deno install --allow-env --allow-net https://raw.githubusercontent.com/tetsuzawa/kibelanotes/main/kibelanotes.ts
```


### TODO・メモ

- なんでDeno?
    - 使いたかったから
- 件数をargsから指定できるようにする
- `deno compile`でバイナリをreleaseから配信
- Release用のworkflow作る
- その他要望お待ちしてます。