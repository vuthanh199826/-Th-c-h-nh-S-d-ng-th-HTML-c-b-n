document.write("<table border='1' width='300' cellspacing='0' cellpadding='15'>");
for(i = 1;i<10;i++) {
    document.write("<tr style='background-color: yellow'>");
    for(j=2;j<10;j++){
        if(j%2==0){
            mau = "yellow";
        }
        else {
            mau = '';
        }
        document.write("<td style='background-color: "+mau+"'>");
        document.write(i + "x" + j + '='+ i*j );
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");