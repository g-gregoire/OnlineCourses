myData = [
[50.06688579999999,19.9136192, 'aleja Adama Mickiewicza 30, 30-059 Kraków, Poland'],
[44.2252795,-76.49514119999999, '99 University Ave, Kingston, ON K7L 3N6, Canada'],
[52.2394019,21.0150792, 'Krakowskie Przedmieście 5, 00-068 Warszawa, Poland'],
[30.018923,31.499674, 'AUC Avenue، 11835, Egypt'],
[43.7077119,-79.3949416, '120 Eglinton Ave E #301, Toronto, ON M4P 1A6, Canada'],
[33.4242399,-111.9280527, 'Tempe, AZ 85281, USA'],
[38.0399391,23.8030901, 'Monumental Plaza, Building C, 1st Floor, Leof. Kifisias 44, Marousi 151 25, Greece'],
[28.3588163,75.5880123, 'Pilani, Rajasthan 333031, India'],
[6.8946472,3.7174267, 'Ilishan-Remo, Nigeria'],
[25.2677203,82.99125819999999, 'Ajagara, Varanasi, Uttar Pradesh 221005, India'],
[12.9527314,77.5157387, 'Gnana Bharathi Campus, Gnana Bharathi Main Rd, Teachers Colony, Nagarbhavi, Bengaluru, Karnataka 560056, India'],
[31.5497007,-97.1143046, '1301 S University Parks Dr, Waco, TX 76706, USA'],
[39.9619537,116.3662615, '19 Xinjiekou Outer St, BeiTaiPingZhuang, Haidian Qu, Beijing Shi, China, 100875'],
[53.8938988,27.5460609, 'Praspyekt Nyezalyezhnastsi 4, Minsk, Belarus'],
[44.8184339,20.4575676, 'Studentski trg 1, Beograd, Serbia'],
[42.5030333,-89.0309048, '700 College St, Beloit, WI 53511, USA'],
[53.8938988,27.5460609, 'Praspyekt Nyezalyezhnastsi 4, Minsk, Belarus'],
[31.262218,34.801461, 'שד בן-גוריון 1, באר שבע, Israel'],
[10.6779085,78.74454879999999, 'Palkalaiperur, Tiruchirappalli, Tamil Nadu 620024, India'],
[42.3504997,-71.1053991, 'Boston, MA 02215, USA'],
[35.3050053,-120.6624942, 'San Luis Obispo, CA 93407, USA'],
[34.1821786,-117.3235324, '5500 University Pkwy, San Bernardino, CA 92407, USA'],
[51.5210038,-0.1746353, '25 Paddington Green, London W2 1NB, UK'],
[40.8075355,-73.9625727, '116th St & Broadway, New York, NY 10027, United States'],
[52.0741818,-0.6278123, 'College Rd, Wharley End, Bedford MK43 0AL, UK'],
[50.1030364,14.3912841, 'Zikova 1903/4, 166 36 Praha 6, Czechia'],
[43.7044406,-72.2886935, 'Hanover, NH 03755, USA'],
[37.3201481,-122.0453953, '21250 Stevens Creek Blvd, Cupertino, CA 95014, USA'],
[46.8677579,-96.7623133, '600 11th St S, Moorhead, MN 56563, USA'],
[48.4331922,35.0427966, 'Haharina Ave, 72, Dnipropetrovsk, Dnipropetrovska oblast, Ukraine, 49000'],
[38.4306911,27.1369201, 'Kültür Mahallesi, Cumhuriyet Blv No:144, 35220 Konak/İzmir, Turkey'],
[39.9566127,-75.18994409999999, '3141 Chestnut St, Philadelphia, PA 19104, USA'],
[30.2849185,-97.7340567, 'Austin, TX 78712, USA'],
[36.0014258,-78.9382286, 'Durham, NC 27708, USA'],
[45.786447,4.764139000000001, '23 Avenue Guy de Collongue, 69130 Écully, France'],
[48.708759,2.164006, '3 Rue Joliot Curie, 91190 Gif-sur-Yvette, France'],
[36.1027527,-79.50235669999999, '50 Campus Drive, Elon, NC 27244, USA'],
[55.48843069999999,8.4467103, 'Spangsbjerg Kirkevej 103, 6700 Esbjerg, Denmark'],
[-2.1481458,-79.9644885, 'Vía Perimetral 5, Guayaquil, Ecuador'],
[51.2468622,6.791686899999999, 'Münsterstraße 156, 40476 Düsseldorf, Germany'],
[47.72336,13.0871409, 'Urstein Süd 1, 5412 Puch bei Hallein, Austria'],
[-23.6958721,-46.54702839999999, 'Av. Pereira Barreto, 400 - Baeta Neves, São Bernardo do Campo - SP, 09751-000, Brazil'],
[45.2461012,19.8516968, 'Trg Dositeja Obradovića 6, Novi Sad 106314, Serbia'],
[40.7529512,-73.4267093, '2350 NY-110, Farmingdale, NY 11735, USA'],
[-19.8690878,-43.9663841, 'Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG, 31270-901, Brazil'],
[26.3727164,-80.10099770000001, '777 Glades Rd, Boca Raton, FL 33431, USA'],
[42.7793667,-72.0560856, '40 University Dr, Rindge, NH 03461, USA'],
[26.1546284,91.66469889999999, 'Jalukbari, Guwahati, Assam, India'],
[38.8314936,-77.3114889, '4400 University Dr, Fairfax, VA 22030, USA'],
[38.8977953,-77.0129087, '600 New Jersey Ave NW, Washington, DC 20001, USA'],
[33.753068,-84.38528190000001, 'Atlanta, GA 30302, USA'],
[42.9097484,-85.7630885, 'Grandville, MI, USA'],
[50.8748769,4.7077753, 'Andreas Vesaliusstraat 13, 3000 Leuven, Belgium'],
[21.0055546,105.8434628, '1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam'],
[31.7945578,35.2414009, 'Jerusalem'],
[17.4452358,78.3492765, 'DLF Building, Professor CR Rao Rd, Gachibowli, Hyderabad, Telangana 500032, India'],
[26.5123388,80.2329, 'Kalyanpur, Kanpur, Uttar Pradesh 208016, India'],
[59.3954769,24.6643815, 'Raja 4, 12616 Tallinn, Estonia'],
[39.1784384,-86.5133166, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[45.4376934,12.3223365, 'Santa Croce, 191, 30135 Venezia VE, Italy'],
[41.8348731,-87.6270059, '10 W 35th St, Chicago, IL 60616, USA'],
[41.8847517,-87.6249119, '150 Michigan Avenue, Chicago, IL 60601, USA'],
[41.8348731,-87.6270059, '10 W 35th St, Chicago, IL 60616, USA'],
[22.3149274,87.31053109999999, 'Kharagpur, West Bengal 721302, India'],
[23.8143819,86.44120219999999, 'Police Line, Sardar Patel Nagar, Hirapur, Dhanbad, Jharkhand 826004, India'],
[39.1784384,-86.5133166, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[39.1784384,-86.5133166, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[12.3779749,-1.5470898, 'Hamdalaye, Ouagadougou, Burkina Faso'],
[39.7792943,-94.8200682, '1018 W St Maartens Dr, St Joseph, MO 64506, USA'],
[18.487876,-69.96229199999999, 'Av. de Los Próceres 49, Santo Domingo 10602, Dominican Republic']
];
