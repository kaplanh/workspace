Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
    * url = "https://www.cnet.com" -> domain name = cnet"


türkcesi
Bir URL'den alan adını çıkarın



Bir dize olarak bir URL verildiğinde, yalnızca etki alanı adını ayrıştıran ve onu bir dize olarak döndüren bir işlev yazın. Örneğin:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
    * url = "https://www.cnet.com" -> domain name = cnet"

cözüm
function domainName(url) {
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
    
};