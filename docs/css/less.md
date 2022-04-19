## less 用法：

循环写法:

```less
.circleFor(@i) when(@i < 16) {
  &:nth-child(@{i}) {
    width: 170px - @c-w * (@i - 12);
    height: 170px - @c-w * (@i - 12);
  }
  .circleFor(@i + 1);
}
```

## less 中 calc 使用

```less
@postHeight: 100px;
margin-bottom: calc(~'@{postHeight}');
```
