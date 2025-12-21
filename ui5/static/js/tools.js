function TimestampToDate(Timestamp,format="Y-M-D H:i:s",ms=0) {
    if(ms==0) Timestamp=Timestamp*1000;
    let now = new Date(Timestamp),
    y = now.getFullYear(),
    m = now.getMonth() + 1,
    d = now.getDate();
    h = now.getHours(),
    i = now.getMinutes(),
    s = now.getSeconds();
    m = m < 10 ? '0' + m : m;
    d = d < 10 ? '0' + d : d;
    h = h < 10 ? '0' + h : h;
    i = i < 10 ? '0' + i : i;
    s = s < 10 ? '0' + s : s;

    format = format.replace(/Y/g, y);
    format = format.replace(/M/g, m);
    format = format.replace(/D/g, d);
    format = format.replace(/H/g, h);
    format = format.replace(/i/g, i);
    format = format.replace(/s/g, s);
    return format;
}
