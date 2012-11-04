/*
Modified by Nejo
now is possible to use the brackets '{' and '}' to remain the same text (no translation for this part)
*/


function latin2russian(text)
{
    var NewText = text;
    var separator = " ";
    
    NewText = NewText.replace(/jo/g, "e");
    NewText = NewText.replace(/je/g, "э");
    NewText = NewText.replace(/ju/g, "ю");
    NewText = NewText.replace(/ja/g, "я");
    NewText = NewText.replace(/ya/g, "я");
    NewText = NewText.replace(/ts/g, "ц");
    NewText = NewText.replace(/ch/g, "ч");
    NewText = NewText.replace(/wh/g, "щ");
    NewText = NewText.replace(/sh/g, "ш");
    NewText = NewText.replace(/w/g, "ш");
	
    NewText = NewText.replace(/a/g, "а");
    NewText = NewText.replace(/b/g, "б");
    NewText = NewText.replace(/v/g, "в");
    NewText = NewText.replace(/g/g, "г");
    NewText = NewText.replace(/d/g, "д");
    NewText = NewText.replace(/e/g, "e");
    NewText = NewText.replace(/zh/g, "ж");
    NewText = NewText.replace(/z/g, "з");
    NewText = NewText.replace(/i/g, "и");
    NewText = NewText.replace(/j/g, "й");
    NewText = NewText.replace(/k/g, "к");
    NewText = NewText.replace(/l/g, "л");
    NewText = NewText.replace(/m/g, "м");
    NewText = NewText.replace(/n/g, "н");
    NewText = NewText.replace(/o/g, "о");
    NewText = NewText.replace(/p/g, "п");
    NewText = NewText.replace(/r/g, "р");
    NewText = NewText.replace(/s/g, "с");
    NewText = NewText.replace(/t/g, "т");
    NewText = NewText.replace(/u/g, "у");
    NewText = NewText.replace(/f/g, "ф");
    NewText = NewText.replace(/h/g, "x");
    NewText = NewText.replace(/x/g, "x");
    NewText = NewText.replace(/#/g, "Ъ");
    NewText = NewText.replace(/y/g, "ы");
    NewText = NewText.replace(/'/g, "ь");
    
    //Zaglavnye
    NewText = NewText.replace(/JO/g, "Е");
    NewText = NewText.replace(/JE/g, "Э");
    NewText = NewText.replace(/JU/g, "Ю");
    NewText = NewText.replace(/JA/g, "Я");
    NewText = NewText.replace(/YA/g, "Я");
    NewText = NewText.replace(/TS/g, "Ц");
    NewText = NewText.replace(/CH/g, "Ч");
    NewText = NewText.replace(/WH/g, "Щ");
    NewText = NewText.replace(/SH/g, "Ш");
    NewText = NewText.replace(/W/g, "Ш");
	
    NewText = NewText.replace(/A/g, "А");
    NewText = NewText.replace(/B/g, "Б");
    NewText = NewText.replace(/V/g, "В");
    NewText = NewText.replace(/G/g, "Г");
    NewText = NewText.replace(/D/g, "Д");
    NewText = NewText.replace(/E/g, "Е");
    NewText = NewText.replace(/ZH/g, "Ж");
    NewText = NewText.replace(/Z/g, "Э");
    NewText = NewText.replace(/I/g, "И");
    NewText = NewText.replace(/J/g, "Й");
    NewText = NewText.replace(/K/g, "К");
    NewText = NewText.replace(/L/g, "Л");
    NewText = NewText.replace(/M/g, "М");
    NewText = NewText.replace(/N/g, "Н");
    NewText = NewText.replace(/O/g, "О");
    NewText = NewText.replace(/P/g, "П");
    NewText = NewText.replace(/R/g, "Р");
    NewText = NewText.replace(/S/g, "С");
    NewText = NewText.replace(/T/g, "Т");
    NewText = NewText.replace(/U/g, "У");
    NewText = NewText.replace(/F/g, "Ф");
    NewText = NewText.replace(/H/g, "Х");
    NewText = NewText.replace(/X/g, "Х");
    NewText = NewText.replace(/#/g, "Ъ");
    NewText = NewText.replace(/Y/g, "Ы");
    NewText = NewText.replace(/'/g, "Ь");
    
    return NewText;
}


function mkcurl_recursive(text)
{
	if( text.length != 0 )
	{
		begin = text.indexOf("{");
		
		if( begin == -1 )
		{
			// Don't exist { in the string
			translated = latin2russian(text);
		}
		else
		{
			// We split the string to translate only the part that interest us
			// we have the first position of the ocurrence
			end = text.indexOf("}");
			
			if( end == -1 )
			{
				translated = latin2russian(text.substring(0, begin));
				translated = translated + text.substring(begin);
			}
			else
			{
				translated = latin2russian(text.substring(0, begin));
				translated = translated + text.substring(begin, end+1);
				translated = translated + mkcurl_recursive(text.substring(end+1));
			}
		}
	}
	else
	{
		translated = text;
	}
	
	return translated;
}


function mkcurl(src)
{
	text = document.getElementById(src).value;
	
	translated = mkcurl_recursive(text);
	
	document.getElementById(src).value = translated;
}
