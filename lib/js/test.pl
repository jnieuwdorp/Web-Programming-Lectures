use strict;
use warnings;

my $url="https://www.google.nl/?#q=chess";

my $num=0;
while($num<1000)
{
    $url=$url."x";
    $num++;
}
print "\n\n$url\n\n";
