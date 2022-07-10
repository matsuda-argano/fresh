/** @jsx h */
import { h } from 'preact';
import { Handlers } from '$fresh/server.ts';

/*
  ハンドラは Request => Response または Request => Promise<Response> という形式の関数
  ハンドラには2つの形式がある
  ・プレーンな関数(すべてのHTTPメソッドのキャッチオール)
  ・プレーンなオブジェクト(各プロパティが、処理する HTTP メソッドによって名付けられた関数)
*/

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set('X-Custom-Header', 'Hello');
    return resp;
  }
};

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}
