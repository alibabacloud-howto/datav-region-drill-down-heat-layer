'use strict'

/** DEFINITION */
/**
 * You need to define country level adcodes.
 * The adcodes for city level are defined automatically with alphabetical order.
 * */

const SOUTHEAST_ASIA = {
  'Southeast Asia': 1000000,  // root (special)
  'Brunei': 180000,
  'Indonesia': 190000,
  'Laos': 200000,
  'Burma': 210000,  // Burma
  'Philippines': 220000,
  'Thailand': 230000,
  'Vietnam': 240000,
  'Cambodia': 250000,
  'Malaysia': 260000,
  'Timor-Leste': 270000,  // East Timor
  'Singapore': 280000,
};
const BRUNEI = {
  'Belait': 180100,
  'Brunei and Muara': 180200,
  'Temburong': 180300,
  'Tutong': 180400,
};
const MALAYSIA = {
  'Johor': 260100,
  'Kedah': 260200,
  'Kelantan': 260300,
  'Kuala Lumpur': 260400,
  'Labuan': 260500,
  'Melaka': 260600,
  'Negeri Sembilan': 260700,
  'Pahang': 260800,
  'Perak': 260900,
  'Perlis': 261000,
  'Pulau Pinang': 261100,
  'Putrajaya': 261200,
  'Sabah': 261300,
  'Sarawak': 261400,
  'Selangor': 261500,
  'Trengganu': 261600,
};
const INDONESIA = {
  "Aceh": 190100,
  "Bali": 190200,
  "Bangka Belitung": 190300,
  "Banten": 190400,
  "Bengkulu": 190500,
  "Gorontalo": 190600,
  "Jakarta Raya": 190700,
  "Jambi": 190800,
  "Jawa Barat": 190900,
  "Jawa Tengah": 191000,
  "Jawa Timur": 191100,
  "Kalimantan Barat": 191200,
  "Kalimantan Selatan": 191300,
  "Kalimantan Tengah": 191400,
  "Kalimantan Timur": 191500,
  "Kepulauan Riau": 191600,
  "Lampung": 191700,
  "Maluku": 191800,
  "Maluku Utara": 191900,
  "Nusa Tenggara Barat": 192000,
  "Nusa Tenggara Timur": 192100,
  "Papua": 192200,
  "Papua Barat": 192300,
  "Riau": 192400,
  "Sulawesi Barat": 192500,
  "Sulawesi Selatan": 192600,
  "Sulawesi Tengah": 192700,
  "Sulawesi Tenggara": 192800,
  "Sulawesi Utara": 192900,
  "Sumatera Barat": 193000,
  "Sumatera Selatan": 193100,
  "Sumatera Utara": 193200,
  "Yogyakarta": 193300
};
const CAMBODIA = {
  "Bântéay Méanchey": 250100,
  "Batdâmbâng": 250200,
  "Kâmpóng Cham": 250300,
  "Kâmpóng Chhnang": 250400,
  "Kâmpóng Spœ": 250500,
  "Kâmpóng Thum": 250600,
  "Kâmpôt": 250700,
  "Kândal": 250800,
  "Kaôh Kong": 250900,
  "Kep": 251000,
  "Krâchéh": 251100,
  "Krong Pailin": 251200,
  "Krong Preah Sihanouk": 251300,
  "Môndól Kiri": 251400,
  "Otdar Mean Chey": 251500,
  "Phnom Penh": 251600,
  "Pouthisat": 251700,
  "Preah Vihéar": 251800,
  "Prey Vêng": 251900,
  "Rôtânôkiri": 252000,
  "Siemréab": 252100,
  "Stœng Trêng": 252200,
  "Svay Rieng": 252300,
  "Takêv": 252400,
  "Tbong Khmum": 252500
};
const LAOS = {
  "Attapu": 200100,
  "Bokeo": 200200,
  "Bolikhamxai": 200300,
  "Champasak": 200400,
  "Houaphan": 200500,
  "Khammouan": 200600,
  "Louang Namtha": 200700,
  "Louangphrabang": 200800,
  "Oudômxai": 200900,
  "Phôngsali": 201000,
  "Saravan": 201100,
  "Savannakhét": 201200,
  "Vientiane": 201300,
  "Vientiane [prefecture]": 201400,
  "Xaignabouri": 201500,
  "Xaisômboun": 201600,
  "Xékong": 201700,
  "Xiangkhoang": 201800
};
const BURMA = {
  "Ayeyarwady": 210100,
  "Bago": 210200,
  "Chin": 210300,
  "Kachin": 210400,
  "Kayah": 210500,
  "Kayin": 210600,
  "Magway": 210700,
  "Mandalay": 210800,
  "Mon": 210900,
  "Naypyitaw": 211000,
  "Rakhine": 211100,
  "Sagaing": 211200,
  "Shan": 211300,
  "Tanintharyi": 211400,
  "Yangon": 211500
};
const PHILIPPINES = {
  "Abra": 220100,
  "Agusan del Norte": 220200,
  "Agusan del Sur": 220300,
  "Aklan": 220400,
  "Albay": 220500,
  "Antique": 220600,
  "Apayao": 220700,
  "Aurora": 220800,
  "Basilan": 220900,
  "Bataan": 221000,
  "Batanes": 221100,
  "Batangas": 221200,
  "Benguet": 221300,
  "Biliran": 221400,
  "Bohol": 221500,
  "Bukidnon": 221600,
  "Bulacan": 221700,
  "Cagayan": 221800,
  "Camarines Norte": 221900,
  "Camarines Sur": 222000,
  "Camiguin": 222100,
  "Capiz": 222200,
  "Catanduanes": 222300,
  "Cavite": 222400,
  "Cebu": 222500,
  "Compostela Valley": 222600,
  "Davao del Norte": 222700,
  "Davao del Sur": 222800,
  "Davao Oriental": 222900,
  "Dinagat Islands": 223000,
  "Eastern Samar": 223100,
  "Guimaras": 223200,
  "Ifugao": 223300,
  "Ilocos Norte": 223400,
  "Ilocos Sur": 223500,
  "Iloilo": 223600,
  "Isabela": 223700,
  "Kalinga": 223800,
  "La Union": 223900,
  "Laguna": 224000,
  "Lanao del Norte": 224100,
  "Lanao del Sur": 224200,
  "Leyte": 224300,
  "Maguindanao": 224400,
  "Marinduque": 224500,
  "Masbate": 224600,
  "Metropolitan Manila": 224700,
  "Misamis Occidental": 224800,
  "Misamis Oriental": 224900,
  "Mountain Province": 225000,
  "Negros Occidental": 225100,
  "Negros Oriental": 225200,
  "North Cotabato": 225300,
  "Northern Samar": 225400,
  "Nueva Ecija": 225500,
  "Nueva Vizcaya": 225600,
  "Occidental Mindoro": 225700,
  "Oriental Mindoro": 225800,
  "Palawan": 225900,
  "Pampanga": 226000,
  "Pangasinan": 226100,
  "Quezon": 226200,
  "Quirino": 226300,
  "Rizal": 226400,
  "Romblon": 226500,
  "Samar": 226600,
  "Sarangani": 226700,
  "Siquijor": 226800,
  "Sorsogon": 226900,
  "South Cotabato": 227000,
  "Southern Leyte": 227100,
  "Sultan Kudarat": 227200,
  "Sulu": 227300,
  "Surigao del Norte": 227400,
  "Surigao del Sur": 227500,
  "Tarlac": 227600,
  "Tawi-Tawi": 227700,
  "Zambales": 227800,
  "Zamboanga del Norte": 227900,
  "Zamboanga del Sur": 228000,
  "Zamboanga Sibugay": 228100
};
const THAILAND = {
  "Amnat Charoen": 230100,
  "Ang Thong": 230200,
  "Bangkok Metropolis": 230300,
  "Bueng Kan": 230400,
  "Buri Ram": 230500,
  "Chachoengsao": 230600,
  "Chai Nat": 230700,
  "Chaiyaphum": 230800,
  "Chanthaburi": 230900,
  "Chiang Mai": 231000,
  "Chiang Rai": 231100,
  "Chon Buri": 231200,
  "Chumphon": 231300,
  "Kalasin": 231400,
  "Kamphaeng Phet": 231500,
  "Kanchanaburi": 231600,
  "Khon Kaen": 231700,
  "Krabi": 231800,
  "Lampang": 231900,
  "Lamphun": 232000,
  "Loei": 232100,
  "Lop Buri": 232200,
  "Mae Hong Son": 232300,
  "Maha Sarakham": 232400,
  "Mukdahan": 232500,
  "Nakhon Nayok": 232600,
  "Nakhon Pathom": 232700,
  "Nakhon Phanom": 232800,
  "Nakhon Ratchasima": 232900,
  "Nakhon Sawan": 233000,
  "Nakhon Si Thammarat": 233100,
  "Nan": 233200,
  "Narathiwat": 233300,
  "Nong Bua Lam Phu": 233400,
  "Nong Khai": 233500,
  "Nonthaburi": 233600,
  "Pathum Thani": 233700,
  "Pattani": 233800,
  "Phangnga": 233900,
  "Phatthalung": 234000,
  "Phayao": 234100,
  "Phetchabun": 234200,
  "Phetchaburi": 234300,
  "Phichit": 234400,
  "Phitsanulok": 234500,
  "Phra Nakhon Si Ayutthaya": 234600,
  "Phrae": 234700,
  "Phuket": 234800,
  "Prachin Buri": 234900,
  "Prachuap Khiri Khan": 235000,
  "Ranong": 235100,
  "Ratchaburi": 235200,
  "Rayong": 235300,
  "Roi Et": 235400,
  "Sa Kaeo": 235500,
  "Sakon Nakhon": 235600,
  "Samut Prakan": 235700,
  "Samut Sakhon": 235800,
  "Samut Songkhram": 235900,
  "Saraburi": 236000,
  "Satun": 236100,
  "Si Sa Ket": 236200,
  "Sing Buri": 236300,
  "Songkhla": 236400,
  "Sukhothai": 236500,
  "Suphan Buri": 236600,
  "Surat Thani": 236700,
  "Surin": 236800,
  "Tak": 236900,
  "Trang": 237000,
  "Trat": 237100,
  "Ubon Ratchathani": 237200,
  "Udon Thani": 237300,
  "Uthai Thani": 237400,
  "Uttaradit": 237500,
  "Yala": 237600,
  "Yasothon": 237700
};
const TIMOR_LESTE = {
  "Aileu": 270100,
  "Ainaro": 270200,
  "Ambeno": 270300,
  "Baucau": 270400,
  "Bobonaro": 270500,
  "Covalima": 270600,
  "Dili": 270700,
  "Ermera": 270800,
  "Lautém": 270900,
  "Liquiçá": 271000,
  "Manatuto": 271100,
  "Manufahi": 271200,
  "Viqueque": 271300
};
const VIETNAM = {
  "An Giang": 270100,
  "Bạc Liêu": 270200,
  "Bắc Giang": 270300,
  "Bắc Kạn": 270400,
  "Bắc Ninh": 270500,
  "Bến Tre": 270600,
  "Bà Rịa - Vũng Tàu": 270700,
  "Bình Định": 270800,
  "Bình Dương": 270900,
  "Bình Phước": 271000,
  "Bình Thuận": 271100,
  "Cần Thơ": 271200,
  "Cà Mau": 271300,
  "Cao Bằng": 271400,
  "Đắk Lắk": 271500,
  "Đắk Nông": 271600,
  "Đồng Nai": 271700,
  "Đồng Tháp": 271800,
  "Đà Nẵng": 271900,
  "Điện Biên": 272000,
  "Gia Lai": 272100,
  "Hải Dương": 272200,
  "Hải Phòng": 272300,
  "Hậu Giang": 272400,
  "Hồ Chí Minh": 272500,
  "Hà Giang": 272600,
  "Hà Nội": 272700,
  "Hà Nam": 272800,
  "Hà Tĩnh": 272900,
  "Hoà Bình": 273000,
  "Hưng Yên": 273100,
  "Khánh Hòa": 273200,
  "Kiên Giang": 273300,
  "Kon Tum": 273400,
  "Lạng Sơn": 273500,
  "Lai Châu": 273600,
  "Lâm Đồng": 273700,
  "Lào Cai": 273800,
  "Long An": 273900,
  "Nam Định": 274000,
  "Nghệ An": 274100,
  "Ninh Bình": 274200,
  "Ninh Thuận": 274300,
  "Phú Thọ": 274400,
  "Phú Yên": 274500,
  "Quảng Bình": 274600,
  "Quảng Nam": 274700,
  "Quảng Ngãi": 274800,
  "Quảng Ninh": 274900,
  "Quảng Trị": 275000,
  "Sóc Trăng": 275100,
  "Sơn La": 275200,
  "Tây Ninh": 275300,
  "Thừa Thiên Huế": 275400,
  "Thái Bình": 275500,
  "Thái Nguyên": 275600,
  "Thanh Hóa": 275700,
  "Tiền Giang": 275800,
  "Trà Vinh": 275900,
  "Tuyên Quang": 276000,
  "Vĩnh Long": 276100,
  "Vĩnh Phúc": 276200,
  "Yên Bái": 276300
};
const SINGAPORE = {  // special. has no city level data
  "Central": 280100,
  "East": 280200,
  "North": 280300,
  "North-East": 280400,
  "West": 280500
};

exports.ROOT_AREA = SOUTHEAST_ASIA;
exports.TARGET_AREAS = {
  SOUTHEAST_ASIA, BRUNEI, MALAYSIA, INDONESIA,
  CAMBODIA, LAOS, BURMA, PHILIPPINES, THAILAND,
  TIMOR_LESTE, VIETNAM, SINGAPORE,
};
exports.NO_CITY_DATA_AREAS = { SINGAPORE };
