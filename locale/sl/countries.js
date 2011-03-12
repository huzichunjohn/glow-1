var _countries = {"": "", "WF": "Wallis in Futuna", "BF": "Burkina Faso", "BG": "Bolgarija", "BA": "Bosna in Hercegovina", "BB": "Barbados", "BE": "Belgija", "BL": "Sveti Bartolomej", "BM": "Bermudi", "BN": "Brunei Darussalam", "BO": "Bolivija", "BH": "Bahrajn", "BI": "Burundi", "BJ": "Benin", "BT": "Butan", "JM": "Jamajka", "BV": "Bouvetov otok", "BW": "Bocvana", "WS": "Samoa", "BR": "Brazilija", "BS": "Bahami", "JE": "Jersey", "BY": "Belorusija", "BZ": "Belize", "TN": "Tunizija", "RW": "Ruanda", "RS": "Srbija", "TL": "Timor-Leste", "RE": "Reunion", "LU": "Luksemburg", "TJ": "Tad\u017eikistan", "RO": "Romunija", "TK": "Tokelau", "GW": "Gvineja Bissau", "GU": "Guam", "GT": "Gvatemala", "GS": "Ju\u017ena Georgia in Ju\u017eni Sandwichevi otoki", "GR": "Gr\u010dija", "GQ": "Ekvatorialna Gvineja", "GP": "Guadeloupe", "JP": "Japonska", "GY": "Gvajana", "GG": "Guernsey", "GF": "Francoska Gvajana", "GE": "Gruzija", "GD": "Grenada", "GB": "Velika Britanija", "GA": "Gabon", "GN": "Gvineja", "GM": "Gambija", "GL": "Grenlandija", "KW": "Kuvajt", "GI": "Gibraltar", "GH": "Gana", "OM": "Oman", "IL": "Izrael", "JO": "Jordanija", "HR": "Hrva\u0161ka", "HT": "Haiti", "HU": "Mad\u017earska", "HK": "Hong Kong", "HN": "Honduras", "HM": "Otok Heard in Oto\u010dje McDonald", "KR": "Ju\u017ena Koreja", "AD": "Andora", "PR": "Portoriko", "PS": "Okupirano palestinsko ozemlje", "IO": "Britanski teritorij v Indijskem oceanu", "PW": "Palau", "PT": "Portugalska", "KN": "Saint Kitts and Nevis", "PY": "Paragvaj", "AI": "Angvila", "PA": "Panama", "PF": "Francoska Polinezija", "PG": "Papua Nova Gvineja", "PE": "Peru", "PK": "Pakistan", "PH": "Filipini", "PN": "Pitcairnovi otoki", "PL": "Poljska", "PM": "Saint Pierre and Miquelon", "ZM": "Zambija", "EH": "Zahodna Sahara", "RU": "Rusija", "EE": "Estonija", "EG": "Egipt", "ZA": "Ju\u017ena Afrika", "EC": "Ekvador", "AL": "Albanija", "AO": "Angola", "KZ": "Kazahstan", "ET": "Etiopija", "ZW": "Zimbabve", "KY": "Kajmanski otoki", "ES": "\u0160panija", "ER": "Eritreja", "ME": "\u010crna Gora", "MD": "Moldavija", "MG": "Madagaskar", "MF": "Sveti Martin", "UY": "Urugvaj", "MC": "Monako", "UZ": "Uzbekistan", "MM": "Mjanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolija", "MH": "Marshallovi otoki", "US": "Zdru\u017eene dr\u017eave Amerike", "MU": "Mauritius", "MT": "Malta", "MW": "Malavi", "MV": "Maldivi", "MQ": "Martinik", "MP": "Severni Marianski otoki", "MS": "Montserrat", "MR": "Mavretanija", "AU": "Avstralija", "UG": "Uganda", "UA": "Ukrajina", "MX": "Mehika", "MZ": "Mozambik", "FR": "Francija", "MA": "Maroko", "AF": "Afganistan", "AX": "\u00c5landski otoki", "FI": "Finska", "FJ": "Fid\u017ei", "FK": "Falklandi (Malvinski otoki)", "FM": "Mikronezija", "FO": "Ferski otoki", "NI": "Nikaragva", "NL": "Nizozemska", "NO": "Norve\u0161ka", "NA": "Namibija", "NC": "Nova Kaledonija", "NE": "Niger", "NF": "Otok Norfolk", "NG": "Nigerija", "NZ": "Nova Zelandija", "NP": "Nepal", "NR": "nauru", "NU": "Niue", "CK": "Cookovi otoki", "CI": "Slonoko\u0161\u010dena obala", "CH": "\u0160vica", "CO": "Kolumbija", "CN": "Kitajska", "CM": "Kamerun", "CL": "\u010cile", "CC": "Kokosovi Otoki", "CA": "Kanada", "CG": "Kongo-Brazzaville", "CF": "Srednjeafri\u0161ka republika", "CD": "Kongo - Kin\u0161asa", "CZ": "\u010ce\u0161ka", "CY": "Ciper", "CX": "Bo\u017ei\u010dni otoki", "CR": "Kostarika", "KP": "Severna Koreja", "CV": "Zelenortski otoki", "CU": "Kuba", "SZ": "Svazi", "SY": "Sirija", "KG": "Kirgizistan", "KE": "Kenija", "SR": "Surinam", "KI": "Kiribati", "KH": "Kambod\u017ea", "SV": "Salvador", "KM": "Komori", "ST": "Sao Tome and Principe", "SK": "Slova\u0161ka", "SJ": "Svalbard in Jan Mayen", "SI": "Slovenija", "SH": "Sveta Helena", "SO": "Somalija", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Sej\u0161eli", "SB": "Solomonovi otoki", "SA": "Savdska Arabija", "SG": "Singapur", "SE": "\u0160vedska", "SD": "Sudan", "DO": "Dominikanska republika", "DM": "Dominika", "DJ": "D\u017eibuti", "DK": "Danska", "DE": "Nem\u010dija", "YE": "Jemen", "AT": "Avstrija", "DZ": "Al\u017eirija", "MK": "Makedonija", "YT": "Mayotte", "UM": "Ameri\u0161ki manj\u0161i zunanji otoki", "LB": "Libanon", "LC": "Sveta Lucija", "LA": "Laos", "TV": "Tuvalu", "TW": "Tajvan", "TT": "Trinidad", "TR": "Tu\u010dija", "LK": "\u0160ri Lanka", "LI": "Lihten\u0161tajn", "LV": "Latvija", "TO": "Tonga", "LT": "Litva", "TM": "Turkmenistan", "LR": "Liberija", "LS": "Lesoto", "TH": "Tajska", "TF": "Francoske ju\u017ene in antarkti\u010dne de\u017eele", "TG": "Togo", "TD": "\u010cad", "TC": "Otoki Turka in Caicosa", "LY": "Libija", "VA": "Vatikan", "VC": "Saint Vincent in Grenadine", "AE": "ZAE", "VE": "Venezuela", "AG": "Antigva in Barbuda", "VG": "Britanski devi\u0161ki otoki", "IQ": "Irak", "VI": "Ameri\u0161ki devi\u0161ki otoki", "IS": "Islandija", "IR": "Iran", "AM": "Armenija", "IT": "Italija", "VN": "Vietnam", "AN": "Nizozemski Antili", "AQ": "Antarktika", "AS": "Ameri\u0161ka Samoa", "AR": "Argentina", "IM": "Man", "VU": "Vanuatu", "AW": "Aruba", "IN": "Indija", "TZ": "Tanzanija", "AZ": "Azerbajd\u017ean", "IE": "Irska", "ID": "Indonezija", "MY": "Malezija", "QA": "Katar", "BD": "Banglade\u0161"}