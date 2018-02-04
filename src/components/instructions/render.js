import React, { Fragment } from 'react';

export default () => (
  <Fragment>
    {/* prettier-ignore */}
    <pre
      className="instructions"
      dangerouslySetInnerHTML={{
        __html: `
<span>/**</span>
<span> * </span>
<span> * </span> /$$$$$$                       /$$                                     /$$     /$$
<span> * </span>|_  $$_/                      | $$                                    | $$    |__/
<span> * </span>  | $$   /$$$$$$$   /$$$$$$$ /$$$$$$    /$$$$$$  /$$   /$$  /$$$$$$$ /$$$$$$   /$$  /$$$$$$  /$$$$$$$   /$$$$$$$
<span> * </span>  | $$  | $$__  $$ /$$_____/|_  $$_/   /$$__  $$| $$  | $$ /$$_____/|_  $$_/  | $$ /$$__  $$| $$__  $$ /$$_____/
<span> * </span>  | $$  | $$  \\ $$|  $$$$$$   | $$    | $$  \\__/| $$  | $$| $$        | $$    | $$| $$  \\ $$| $$  \\ $$|  $$$$$$
<span> * </span>  | $$  | $$  | $$ \\____  $$  | $$ /$$| $$      | $$  | $$| $$        | $$ /$$| $$| $$  | $$| $$  | $$ \\____  $$
<span> * </span> /$$$$$$| $$  | $$ /$$$$$$$/  |  $$$$/| $$      |  $$$$$$/|  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$ /$$$$$$$/
<span> * </span>|______/|__/  |__/|_______/    \\___/  |__/       \\______/  \\_______/   \\___/  |__/ \\______/ |__/  |__/|_______/
<span> * </span>
<span> * </span>
<span> * <strong>Q: How do I enter my data?</strong></span>
<span> * </span>
<span> *    A:  You can paste it directly from your clipboard,</span>
<span> *        <a href="" title="Choose a file">choose a file</a> from your computer or drag it here.</span>
<span> *        You can also quickly use this <a href="" title="Sample file">sample file</a>.</span>
<span> * </span>
<span> * <strong>Q: What shape my data should have?</strong></span>
<span> * </span>
<span> *    A:  Your data should meet the requirements below:</span>
<span> * </span>
<span> *        ✔ be a valid JSON</span>
<span> * </span>
<span> *        ✔ all its nodes shoud have this format (<a href="" title="Choose a file">example</a>):</span>
<span> * </span>
<span> *          {</span>
<span> *            &lt;String&gt;: { // Employee's name</span>
<span> *              "position": &lt;String&gt;,</span>
<span> *              "employees": &lt;Array&lt;Employee&gt;&gt;</span>
<span> *            }</span>
<span> *          }</span>
<span> * </span>
<span> *        ✔ each node should represent only one employee</span>
<span> * </span>
<span> *        ✔ the name of all employees should be unique</span>
<span> *          and appear only once in the entire data</span>
<span> * </span>
<span> */</span>
 `}} />
  </Fragment>
);
