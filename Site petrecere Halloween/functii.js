function tran(n) {
    $("div[data-page="+n+"]").removeClass("closed").addClass("open");
    $("div.open[data-page!="+n+"]").removeClass("open").addClass("closed");
  }