## 命令
```bash
# 直接将转码后的结果输出
babel test.js

# --out-file 或 -o 参数指定输出文件
babel a.js --out-file b.js

babel a.js -o b.js

# --out-dir 或 -d 参数指定输出目录
babel src --out-dir lib

babel src -d lib

# -s 参数生成source map文件
babel src -d lib -s
```