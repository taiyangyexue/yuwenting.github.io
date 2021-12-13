<template><h3 id="css设置网站为黑白颜色" tabindex="-1"><a class="header-anchor" href="#css设置网站为黑白颜色" aria-hidden="true">#</a> css设置网站为黑白颜色</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> -moz-filter:grayscale(100%);
    -ms-filter:grayscale(100%);
    -o-filter:grayscale(100%);
    filter:grayscale(100%);
    filter:url("data:image/svg+xml;utf8,&lt;svg xmlns=\'http://www.w3.org/2000/svg\'>&lt;filter id=\'grayscale\'>&lt;feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/>&lt;/filter>&lt;/svg>#grayscale");
    filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>
