## IE compatibility
- `<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">` http://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do
>  In order to tell IE how to render the content, !DOCTYPE has to work with X-UA-Compatible meta tag. !DOCTYPE by itself has no affect on changing IE Document Mode.

- [document mode deprecated in Edge](https://technet.microsoft.com/en-us/itpro/internet-explorer/ie11-deploy-guide/deprecated-document-modes): `document.documentMode`
  - edge's changes https://blogs.windows.com/msedgedev/2015/05/06/a-break-from-the-past-part-2-saying-goodbye-to-activex-vbscript-attachevent/
  - "living" document mode https://blogs.msdn.microsoft.com/ie/2014/11/11/living-on-the-edge-our-next-step-in-helping-the-web-just-work/
