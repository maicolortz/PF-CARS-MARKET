const car = [
  {
    name: "Toyota Hilux 2-8 Cd Srx 177cv 4x4",
    brand: "Toyota",
    model: "Hilux",
    year: 2008,
    color: "gris",
    oil: "diesel",
    gate: 4,
    kilometres: 20000,
    descriptionShort: "Toyota Hilux 2-8 Cd Srx 177cv 4x4",
    descriptionLong:
      "MOTOR 2-8 TURBODIESEL 204CV, 4X2, 4X4 Y 4X4 REDUCIDA CON ACCIONAMIENTO ELECTRÓNICO, FAROS DELANTEROS BI-LED, FAROS TRASEROS DE LED, LUCES DIURNAS DE LED, PROTECTOR DE CÁRTER HEAVY DUTY, SISTEMA DE INGRESO INTELIGENTE, SISTEMA DE INGRESO INTELIGENTE, CONECTIVIDAD ANDROID AUTO Y APPLE CARPLAY, SISTEMA DE AUDIO PREMIUM JBL CON 8 PARLANTES Y SUBWOOFER, ECO Y POWER MODE, ETC.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_869695-MLA51918662241_102022-O.webp",
    price: 43900,
    condition: "Usado",

    transmition: "Sincronico",
    userId: 1,
    premium: false,
  },
  {
    name: "BMW X1 2-0 Sdrive 25i Xline 231cv",
    brand: "BMW",
    model: "X1",
    year: 2017,
    color: "negro",
    oil: "Nafta",
    gate: 5,
    kilometres: 117000,
    descriptionShort: "BMW X1 2-0 Sdrive 25i Xline 231cv",
    descriptionLong:
      "Excelente estado. Todos los servicios en concesionario oficial.Versión tope de gama. Traccion integral. Motor 2 litros de 231 CV. Aceptamos permutas.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_862199-MLA51107673007_082022-O.webp",
    price: 36300,
    condition: "Nuevo",
    transmition: "Automatico",
    userId: 1,
    premium: false,
  },
  {
    name: "Chevrolet Corsa 1-4 Classic Gls",
    brand: "Chevrolet",
    model: "Corsa",
    year: 2009,
    color: "verde",
    oil: "nafta",
    gate: 4,
    kilometres: 119000,
    descriptionShort: "Chevrolet Corsa 1-4 Classic Gls",
    descriptionLong:
      "Chevrolet Corsa Classic 1.4 Gls 4ptas Año 2009 - LivMotors MUY BUENAS CONDICIONES MECANICAS!!! USADOS CON GARANTIA!!!",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_782419-MLA51920906270_102022-O.webp",
    price: 8203,
    condition: "Usado",
    transmition: "Sincronico",
    userId: 1,
    premium: false,
  },
  {
    name: "Chevrolet Cruze II 1-4 Sedan Ltz",
    brand: "Chevrolet",
    model: "Cruze II",
    year: 2017,
    color: "marron",
    oil: "Nafta",
    gate: 4,
    kilometres: 47000,
    descriptionShort: "Chevrolet Cruze II 1.4 Sedan Ltz",
    descriptionLong:
      "Chevrolet Cruze 1.4 Turbo Ltz 4p Mt Año 2017 - Liv Motors EXCELENTES CONDICIONES!!! USADOS CON GARANTIA!!!",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_998658-MLA51919909337_102022-O.webp",
    price: 25373,
    condition: "Usado",
    transmition: "Sincronico",
    userId: 1,
    premium: false,
  },
  {
    name: "Renault Kangoo 1-6 Furgon Ph3 Confort 5as Lc",
    brand: "Renault",
    model: "Kangoo",
    year: 2014,
    color: "rojo",
    oil: "Nafta",
    gate: 3,
    kilometres: 100000,
    descriptionShort: "Renault Kangoo 1.6 Furgon Ph3 Confort 5as Lc",
    descriptionLong:
      "Renault Kangoo Confort 1.6 5plzas 2plc Año 2014 - Liv Motors MUY BUENAS CONDICIONES MECANICAS!!!USADOS CON GARANTIA!!!GRABADO DE AUTO PARTES - AL DÍA y CON DOCUMENTACIÓN LISTA PARA TRANSFERIR",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_993659-MLA51919130354_102022-O.webp",
    price: 220000,
    condition: "Usado",
    transmition: "Sincronico",
    userId: 1,
    premium: false,
  },
  {
    name: "Citroën C4 Lounge 1-6 Thp 165 At6 Feel",
    brand: "Citroën",
    model: "C4 Lounge",
    year: 2017,
    color: "blanco",
    oil: "Nafta",
    gate: 4,
    kilometres: 72100,
    descriptionShort: "Citroën C4 Lounge 1.6 Thp 165 At6 Feel",
    descriptionLong:
      "Comunicate por llamado, wspp o mensaje de esta publicación para conseguir un descuento extra!!!Asesor Alexis Castiglioni, más de 15 años en el rubro y más de 1.500 ventas, respaldan la seriedad y el respeto por el cliente. Te aseguro buena atención y excelente trato.NUESTRAS FOTOS SON REALES!!! SIN RETOQUES DIGITALES. PARA QUE VEAS LA REALIDAD.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_814142-MLA51919134525_102022-O.webp",
    price: 20921,
    condition: "Usado",
    transmition: "Sincronico",
    userId: 2,
    premium: false
  },
  {
    name: "Volkswagen Suran 1-6 I Trendline 90b",
    brand: "Volkswagen",
    model: "Suran",
    year: 2010,
    color: "blanco",
    oil: "Nafta",
    gate: 5,
    kilometres: 99000,
    descriptionShort: "Volkswagen Suran 1.6 I Trendline 90b",
    descriptionLong:
      "Volkswagen Suran 1.6 Trendline Año 2010 - Liv Motors MUY BUEN ESTADO!!USADOS CON GARANTIA!!!GRABADO DE AUTO PARTES - AL DÍA y CON DOCUMENTACIÓN LISTA PARA TRANSFERIR",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_740468-MLA51918607155_102022-O.webp",
    price: 197000,
    condition: "Nuevo",
    transmition: "Sincronico",
    userId: 2,
    premium: false
  },
  {
    name: "Peugeot 208 1-6 Gt Thp",
    brand: "Peugeot",
    model: "206",
    year: 2019,
    color: "blanco",
    oil: "Nafta",
    gate: 5,
    kilometres: 30000,
    descriptionShort: "Peugeot 208 1.6 Gt Thp",
    descriptionLong:
      "PEUGEOT 208 GT MODELO 2019 30.000 KMS MOTOR 1.6 4 CILINDROS 165HP, CLIMATIZADOR AUTOMÁTICO, TECHO PANORÁMICO, TAPIZADO EN CUERO, LLANTAS DE 17 PULGADAS, AIRBAGS FRONTALES, LATERALES Y DE CORTINA, ABS, EBD, ESP, CONTROL DE VELOCIDAD CRUCERO, PANTALLA TÁCTIL DE 7 PULGADAS CON CÁMARA DE RETROCESO, APPLE CARPLAY, ANDROID AUTO, BLUETOOTH, SENSORES DE ESTACIONAMIENTO, COMPUTADORA DE ABORDO, FAROS ANTINIEBLA, LEVANTA CRISTALES Y ESPEJOS ELÉCTRICOS, SENSOR DE LLUVIA Y CREPUSCULAR, ETC.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_608730-MLA51918417766_102022-O.webp",
    price: 17900,
    condition: "Usado",
    transmition: "Sincronico",
    userId: 2,
    premium: false
  },
  {
    name: "Audi A3 Sportback 2-0 T Fsi Stronic 200cv",
    brand: "Audi",
    model: "A3 Sportbaclk",
    year: 2009,
    color: "negro",
    oil: "Nafta",
    gate: 5,
    kilometres: 126000,
    descriptionShort: "Audi A3 Sportback 2.0 T Fsi Stronic 200cv",
    descriptionLong:
      "excelente equpamiento, muy buen estado, escucho ofertas de contado, acepto permutas",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_713760-MLA51917149913_102022-O.webp",
    price: 16000,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Jeep Renegade 1-8 Longitude At6",
    brand: "Jeep",
    model: "Renegade",
    year: 2019,
    color: "negro",
    oil: "Nafta",
    gate: 5,
    kilometres: 37000,
    descriptionShort: "Jeep Renegade 1.8 Longitude At6",
    descriptionLong:
      "Jeep Renegade Longitude 1.8 At Año 2019 - Liv Motors EXCELENTES CONDICIONES!!!USADOS CON GARANTIA!!!GRABADO DE AUTO PARTES - AL DÍA y CON DOCUMENTACIÓN LISTA PARA TRANSFERIR",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_820132-MLA51917099042_102022-O.webp",
    price: 39427,
    condition: "Usado",
    transmition: "Automatico",
    userId: 4,
    premium: false
  },
  {
    name: "Fiat Pulse 1-3 Drive Gse Cvt",
    brand: "Fiat",
    model: "Pulse",
    year: 2022,
    color: "azul",
    oil: "Nafta",
    gate: 5,
    kilometres: 0,
    descriptionShort: "Fiat Pulse 1.3 Drive Gse Cvt",
    descriptionLong:
      "Concesionaria Oficial FIAT Auto Generali - NO ES PLAN DE AHORROS /**UNIDAD CON ENTREGA INMEDIATA**/ **Financiamos con la mejor TASA en CUOTAS FIJAS LA 1ra CUOTA SE PAGA A LOS 90 DÍAS* *Tomamos TU Usados como parte de Pago** ",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_848044-MLA51968640677_102022-F.webp",
    price: 26073,
    condition: "Nuevo",
    transmition: "Automatico",
    userId: 4,
    premium: false
  },

  {
    name: "Chevrolet Cruze 5 1-4 Rs At 5 p",
    brand: "Chevrolet",
    model: "Cruze 5",
    year: 2022,
    color: "rojo",
    oil: "Nafta",
    gate: 5,
    kilometres: 0,
    descriptionShort: "Chevrolet Cruze 5 1.4 Rs At 5 p",
    descriptionLong:
      "ANTICIPO Y CUOTAS FIJAS EN PESOS / COMPRA TU 0KM SOLO CON ENTREGA INMEDIATA!! /VENDEMOS AUTOS FISICOS CON NRO DE MOTOR Y CHASIS!!/NO ESPERES MAS POR TU 0KM!/VENTAS A TODO EL PAIS SOLO ENTREGA YA!",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_711851-MLA51967528070_102022-F.webp",
    price: 33845,
    condition: "Nuevo",
    transmition: "Automatico",
    userId: 5,
    premium: true
  },
  {
    name: "Toyota Hilux 2-4 Cd Dx 150cv 4x4",
    brand: "Toyota",
    model: "Hilux",
    year: 2022,
    color: "Blanco",
    oil: "Diésel",
    gate: 4,
    kilometres: 0,
    descriptionShort: "Toyota Hilux 2.4 Cd Dx 150cv 4x4",
    descriptionLong:
      "Hilux 4x4 DX 2.4, 0 km, sistema car play, pantalla tactil, control crucero,DISPONIBLE, ENTREGA INMEDIATA, posibilidad de facturarla. ",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_744848-MLA51964930384_102022-F.webp",
    price: 62957,
    condition: "Nuevo",
    transmition: "Sincronico",
    userId: 5,
    premium: true
  },
  {
    name: "Chevrolet S10 2-8 Cd 4x4 Z71",
    brand: "Chevrolet",
    model: "S10",
    year: 2022,
    color: "Gris",
    oil: "Diésel",
    gate: 4,
    kilometres: 0,
    descriptionShort: "Chevrolet S10 2.8 Cd 4x4 Z71",
    descriptionLong:
      "ANTICIPO Y CUOTAS FIJAS EN PESOS /COMPRA TU 0KM SOLO CON ENTREGA INMEDIATA!!/VENDEMOS AUTOS FISICOS CON NRO DE MOTOR Y CHASIS!!",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_615093-MLA51966761470_102022-F.webp",
    price: 60768,
    condition: "Nuevo",
    transmition: "Automatico",
    userId: 5,
    premium: true
  },
  {
    name: "Volkswagen Amarok 3-0 V6 Cd Highline",
    brand: "Volkswagen",
    model: "Amarok",
    year: 2022,
    color: "Blanco",
    oil: "Diésel",
    gate: 4,
    kilometres: 0,
    descriptionShort: "Volkswagen Amarok 3.0 V6 Cd Highline",
    descriptionLong: " ",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_747530-MLA51966301952_102022-F.webp",
    price: 80763,
    condition: "Nuevo",
    transmition: "Automatico",
    userId: 6,
    premium: true
  },
  {
    name: "Volkswagen Taos 1-4 250 Tsi Hero",
    brand: "Volkswagen",
    model: "Taos",
    year: 2022,
    color: "Dorado",
    oil: "Nafta",
    gate: 5,
    kilometres: 0,
    descriptionShort: "Volkswagen Taos 1.4 250 Tsi Hero",
    descriptionLong:
      "CONCESIONARIO OFICIAL VOLKSWAGEN ESPASA PUERTO MADERO.//VENDEDOR: EDGAR LOPEZ//11.400.000 mil pesos final patentado (CABA) puesto en la calle, incluido el flete, formularios, patentamiento y hasta el sellado, más $63.000 de obleas y verificación, NO PAGAS NADA MAS en gastos Administrativo, te queda a pagar solo el proporcional de patentes.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_957721-MLA51965490866_102022-F.webp",
    price: 66645,
    condition: "Nuevo",
    transmition: "Automatico",
    userId: 6,
    premium: true
  },
  {
    name: "Citroën C4 Cactus 1-6 Vti 115 Feel",
    brand: "Citroën",
    model: "C4 Cactus",
    year: 2022,
    color: "Gris",
    oil: "Nafta",
    gate: 5,
    kilometres: 0,
    descriptionShort: "Citroën C4 Cactus 1.6 Vti 115 Feel",
    descriptionLong:
      "CAJA MANUAL Modelo 2022. Equipamiento Full. CONSULTE POR ENTREGA PACTADA: PLAN 84 CUOTAS CON 30% DE ANTICIPO",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_735322-MLA51964288499_102022-F.webp",
    price: 22800,
    condition: "Nuevo",
    transmition: "Sincronico",
    userId: 2,
    premium: false
  },
  {
    name: "Citroën Berlingo 1-6 Vti 115 Business",
    brand: "Citroën",
    model: "Berlingo",
    year: 2022,
    color: "Blanco",
    oil: "Nafta",
    gate: 3,
    kilometres: 0,
    descriptionShort: "Citroën Berlingo 1.6 Vti 115 Business",
    descriptionLong:
      "CONSULTE POR ENTREGA PACTADA: PLAN 84 Y 120 CUOTAS CON 30% DE ANTICIPO ENTREGA RAPIDA: UNIDADES AL COSTO!!! ADJUDICADAS A PEDIR LOS PRIMEROS DIAS DE NOVIEMBRE",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_865592-MLA51964402030_102022-F.webp",
    price: 24100,
    condition: "Nuevo",
    transmition: "Sincronico",
    userId: 3,
    premium: false
  },
  {
    name: "Renault ALASKAN 2-3 Bit 16v Intens Mt 4x4",
    brand: "Renault",
    model: "ALASKAN",
    year: 2022,
    color: "Blanco",
    oil: "Diésel",
    gate: 4,
    kilometres: 0,
    descriptionShort: "Renault ALASKAN 2.3 Bit 16v Intens Mt 4x4",
    descriptionLong:
      "PRECIO PUBLICADO CORRESPONDE A ANTICIPO Y 18 CUOTAS DE $97305 GASTOS INCLUIDOS CONSULTAME POR PRECIO DE CONTADO...OFERTA HASTA AGOTAR STOCK",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_736011-MLA51967751846_102022-F.webp",
    price: 57300,
    condition: "Nuevo",
    transmition: "Sincronico",
    userId: 3,
    premium: false
  },
  {
    name: "Renault Kangoo Ii Express Confort 5a 1-6 Sce",
    brand: "Renault",
    model: "Kangoo",
    year: 2022,
    color: "Gris",
    oil: "Nafta",
    gate: 3,
    kilometres: 0,
    descriptionShort: "Renault Kangoo Ii Express Confort 5a 1.6 Sce",
    descriptionLong:
      "Horario de atención: Lunes a Sábados de 9:00hs a 19:00hs Atendemos tu consulta vía ON LINE por WhatsApp, por llamada o videollamada. ASESORA COMERCIAL: THIAGO ACOSTA LEPIC sucursal: BOEDO Dirección: Av. La Plata 1588, BOEDO, CABA",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_911483-MLA51963762972_102022-F.webp",
    price: 29675,
    condition: "Nuevo",
    transmition: "Sincronico",
    userId: 3,
    premium: false
  },

  {
    name: "Renault Sandero Stepway 1-6 16v Intense",
    brand: "Renault",
    model: "Sandero Stepway",
    year: 2022,
    color: "Plateado",
    oil: "Nafta",
    gate: 5,
    kilometres: 0,
    descriptionShort: "Renault Sandero Stepway 1.6 16v Intense",
    descriptionLong:
      "CONCESIONARIO OFICIAL DE RENAULT NUMERO UNO/ RENAULT LEPIC S.A/Horario de atención: Lunes a Sábados de 9:00hs a 19:00hs/Atendemos tu consulta vía ON LINE por WhatsApp, por llamada o videollamada./ ASESORA COMERCIAL: THIAGO ACOSTA/LEPIC sucursal: BOEDO/ Dirección: Av. La Plata 1588, BOEDO, CABA",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_604878-MLA51967751959_102022-F.webp",
    price: 26297,
    condition: "Nuevo",
    transmition: "Sincronico",
    userId: 3,
    premium: false
  },
  {
    name: "Renault Logan Ph2 Zen 1-6 2022",
    brand: "Renault",
    model: "Logan",
    year: 2022,
    color: "Gris claro",
    oil: "Nafta",
    gate: 4,
    kilometres: 0,
    descriptionShort: "Renault Logan Ph2 Zen 1.6 2022",
    descriptionLong:
      "- Esta es la OPORTUNIDAD para OBTENER tu 0 km.- La oferta publicada corresponde a una promoción específica de este mes.- Vendemos a todo el país de manera ágil y sencilla. ¡Únicamente viajás para retirar la unidad!- ¡No dudes en consultar por otros modelos en promoción! - Financiamos en tasas a cuotas fijas y SIN INTERÉS. Asesorate ahora.- Sin duda la mejor toma de usados.",
    image: "",
    price: 23070,
    condition: "Nuevo",
    transmition: "Sincronico",
    userId: 3,
    premium: false
  },
  {
    name: "Honda HR-V 1-8 Ex-l 2wd Cvt",
    brand: "Honda",
    model: "HR-V",
    year: 2022,
    color: "Gris",
    oil: "Nafta",
    gate: 5,
    kilometres: 11111,
    descriptionShort: "Honda HR-V 1.8 Ex-l 2wd Cvt",
    descriptionLong:
      "UNICA/HONDA HR-V 0KM/ TIENE 40 KMS/ PATENTADA EL 23/09/2022/ RETIRADA HOY DE HONDA LELLOIR 11/10/2022/ GARANTIA DE HONDA/ TODOS LOS MANULAES/ ESTE MODELO NO SE CONSIGUE HACE MESES EN NINGUNA AGENCIA HONDA/ SOLO VENTA CON TRANSFERENCIA INMEDIATA/ RADICADA EN CABA/ PARTICULAR/ ELIZABETH",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_643425-MLA51905979345_102022-F.webp",
    price: 36000,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Honda CR-V 2-4 4x2 Active At Lx",
    brand: "Honda",
    model: "CR-V",
    year: 2005,
    color: "Azul",
    oil: "Nafta",
    gate: 5,
    kilometres: 110000,
    descriptionShort: "Honda CR-V 2.4 4x2 Active At Lx",
    descriptionLong:
      "ESCUCHO OFERTA! Razonable/ PRIMERA MANO!!!/ EXCELENTE CAMIONETA , NO HAY QUE HACERLE NADA !/ NUEVA ./ TITULAR ./NO PERMUTO .",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_653396-MLA51198956454_082022-F.webp",
    price: 12000,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Toyota Corolla 1-8 Xei Cvt 140cv",
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "Negro",
    oil: "Nafta",
    gate: 4,
    kilometres: 30000,
    descriptionShort: "Toyota Corolla 1.8 Xei Cvt 140cv",
    descriptionLong:
      "Somos Hauswagen Pilar, un concesionario oficial con más de 15 años de trayectoria. Nuestras unidades usadas se encuentran en optimas condiciones y listas para transferir. Tomamos usados de todas las marcas en parte de pago. Nuestro objetivo es ofrecerte una incomparable experiencia de compra.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_689064-MLA51811671220_102022-F.webp",
    price: 30000,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Toyota Hilux 2-8 Cd Srx 177cv 4x4 At",
    brand: "Toyota",
    model: "Hilux",
    year: 2019,
    color: "Gris",
    oil: "Diésel",
    gate: 4,
    kilometres: 51600,
    descriptionShort: "Toyota Hilux 2.8 Cd Srx 177cv 4x4 At",
    descriptionLong:
      "CONSULTA DISPONIBILIDAD 11 6375 3041/ Asesora Comercial Maria Abregu/ Somos Hauswagen Pilar Concesionario Oficial Lider en ventas con mas de 20 años de trayectoria, tomamos unidades usadas en parte de pago, financiamos con dni tasa preferencial usados.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_829159-MLA51484080012_092022-F.webp",
    price: 78900,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Toyota Hilux 2-8 Cd Srv 177cv 4x2",
    brand: "Toyota",
    model: "Hilux",
    year: 2022,
    color: "Blanco",
    oil: "Diésel",
    gate: 4,
    kilometres: 6300,
    descriptionShort: "Toyota Hilux 2.8 Cd Srv 177cv 4x2",
    descriptionLong:
      "·TODOS NUESTROS VEHÍCULOS SE ENTREGAN CON VTV VIGENTE Y GRABADO DE AUTOPARTES !/·GARANTIA: 3 meses de MOTOR Y CAJA!/  Entregas tu usado y te llevas el nuevo en el momento! LLAVE CONTRA LLAVE./ ·Contamos con gestoría propia. Todos los vehiculos salen transferidos y al DIA./ Seguros de primera linea con descuentos/ Linea directa con los mejores BANCOS, aprobacion del credito en 15 minutos, financiaciones SOLO CON DNI, con o sin RECIBO DE SUELDO!",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_710824-MLA51168543607_082022-F.webp",
    price: 29675,
    condition: "Nuevo",
    transmition: "Sincronico",
    userId: 3,
    premium: false
  },
  {
    name: "Toyota Hilux 2-8 Cd Srv 4x4 At 2021",
    brand: "Toyota",
    model: "Hilux",
    year: 2021,
    color: "Negro",
    oil: "Diésel",
    gate: 4,
    kilometres: 29000,
    descriptionShort: "Toyota Hilux 2.8 Cd Srv 4x4 At 2021",
    descriptionLong:
      "- Aceptamos permuta/ - Financiamos./ Rangugni Auto . com R*A",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_849004-MLA50969856329_082022-F.webp",
    price: 47000,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },

  {
    name: "Toyota Hiace 2-8 Tdi Commuter 6at 14a",
    brand: "Toyota",
    model: "Hiace",
    year: 2022,
    color: "Blanco",
    oil: "Diésel",
    gate: 4,
    kilometres: 1000,
    descriptionShort: "Toyota Hiace 2.8 Tdi Commuter 6at 14a",
    descriptionLong:
      "GERENTE DE VENTAS : GIAN MINORE/ TODAS NUESTRAS UNIDADES SON CHEQUEADAS POR NUESTROS MECANICOS PARA LA TRANQUILIDAD DE NUESTROS CLIENTES/ CONTAMOS CON GESTORIA PROPIA PARA QUE RETIRES LA UNIDAD EN EL MISMO DIA (TODAS NUESTRAS UNIDADES SE VENDEN SI O SI TRANSFERIDOS)/ ACEPTAMOS PERMUTA DE MAYOR O MENOS VALOR/ CAR CASH ARGENTINA/ BARTOLOME MITRE 1790 CASTELAR - EDUARDO MUÑIZ 181 ITUZAINGO",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_828345-MLA51720085111_092022-F.webp",
    price: 58000,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Toyota SW4 2-8 Srx 177cv 4x4 7as At",
    brand: "Toyota",
    model: "SW4",
    year: 2016,
    color: "Gris",
    oil: "Diésel",
    gate: 5,
    kilometres: 215000,
    descriptionShort: "Toyota SW4 2.8 Srx 177cv 4x4 7as At",
    descriptionLong:
      "Única Mano/ 215.000 Km (en Ruta)/ Service Oficiales (Hasta 150.000 km)/ 3 Filas de Asientos (7asientos)/ Caja Automática 6 Velocidades/ 4x4 - 177cv/ Tratamiento cerámico/ Impecable",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_883204-MLA51935426203_102022-F.webp",
    price: 37000,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Toyota Etios 1-5 Xls At",
    brand: "Toyota",
    model: "Etios",
    year: 2022,
    color: "Negro",
    oil: "Nafta",
    gate: 5,
    kilometres: 1111,
    descriptionShort: "Toyota Etios 1.5 Xls At",
    descriptionLong:
      "UNIDAD PATENTADA SIN RODAR - ENTREGA INMEDIATA/ UNIDAD EXHIBIDA EN NUESTRO SALON DE VENTAS/ GERENTE DE VENTAS: JUAN MANUEL/ Car Cash Argentina - Concesionario Multimarca con más de 8 años de trayectoria en el mercado automotor.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_626053-MLA51753530218_092022-F.webp",
    price: 22000,
    condition: "Nuevo",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Toyota SW4 2-8 Tdi Diamante Ii 4x4 7as 6at",
    brand: "Toyota",
    model: "SW4",
    year: 2022,
    color: "Gris",
    oil: "Diésel",
    gate: 5,
    kilometres: 1000,
    descriptionShort: "Toyota SW4 2.8 Tdi Diamante Ii 4x4 7as 6at",
    descriptionLong:
      "TOYOTA SW4 DIAMOND OKM, 2022 SIN RODAR,RETIRA HOY,ACEPTO PERMUTAS",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_645310-MLA50531323545_062022-F.webp",
    price: 69900,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Toyota Corolla Cross 1-8 Xei Ecvt",
    brand: "Toyota",
    model: "Corolla Cross",
    year: 2022,
    color: "Plateado",
    oil: "Hibrido/Nafta",
    gate: 5,
    kilometres: 1400,
    descriptionShort: "Toyota Corolla Cross 1.8 Xei Ecvt",
    descriptionLong:
      "Somos Northville concesionario Nº1 en ventas/ Nos destacamos por una propuesta de servicio, asesoramiento y calidad con los más altos estándares del mercado./INSPECCIÓN Y COBERTURA MECÁNICA: todos nuestros vehículos están chequeados y certificados en 240 puntos por nuestro equipo de expertos, VTV vigente, libre de deudas de patentes e infraccione",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_699999-MLA50620573439_072022-F.webp",
    price: 29675,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Toyota SW4 2-8 Srx 177cv 4x4 7as At",
    brand: "Toyota",
    model: "SW4",
    year: 2022,
    color: "Gris",
    oil: "Diésel",
    gate: 5,
    kilometres: 1000,
    descriptionShort: "Toyota SW4 2.8 Srx 177cv 4x4 7as At",
    descriptionLong:
      "GCDC Usados Seleccionados/ GCDC cuenta con más de 35 años de trayectoria y está conformado por los mejores concesionarios oficiales de las marcas Volkswagen, Mercedes-Benz, Jeep, Ram, MV Agusta, Ducati, Benelli y Suzuki.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_657310-MLA51446147502_092022-F.webp",
    price: 120763,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Audi A3 Sportback 2-0 T Fsi Stronic 200cv",
    brand: "Audi",
    model: "A3 Sportback",
    year: 2009,
    color: "Negro",
    oil: "Nafta",
    gate: 5,
    kilometres: 126000,
    descriptionShort: "Audi A3 Sportback 2.0 T Fsi Stronic 200cv",
    descriptionLong:
      "excelente equpamiento/muy buen estado/ escucho ofertas de contado/ acepto permutas",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_713760-MLA51917149913_102022-F.webp",
    price: 15900,
    condition: "Usado",
    transmition: "Automatico",
    userId: 2,
    premium: false
  },
  {
    name: "Audi Q2 1-4 35 Tfsi Sport 150 Cv",
    brand: "Audi",
    model: "Q2",
    year: 2022,
    color: "Blanco",
    oil: "Nafta",
    gate: 5,
    kilometres: 0,
    descriptionShort: "Audi Q2 1.4 35 Tfsi Sport 150 Cv",
    descriptionLong:
      "Automóviles Buenos Aires/ Concesionario Audi Número #1 de la Argentina/ -- Stock permanente, entrega inmediata./ Tomamos su usado en consignación para la venta./ Mejoramos cualquier oferta.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_991570-MLA51841280647_102022-F.webp",
    price: 59800,
    condition: "Nuevo",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Audi Q3 2-0 Tfsi Stronic Quattro 220cv",
    brand: "Audi",
    model: "Q3",
    year: 2017,
    color: "Plateado",
    oil: "Nafta",
    gate: 5,
    kilometres: 65000,
    descriptionShort: "Audi Q3 2.0 Tfsi Stronic Quattro 220cv",
    descriptionLong:
      "Audi Q3 2.0Tfsi 220cv Stronic Quattro/ 2017 con 65.000kms. Servicios Oficiales !!!/ Garantía de Concesionario !!!/ Concesionario Oficial Audi Buenos Aires S.A./ Av. Juan Bautista Alberdi 53, caba/ Asesor: Gaston Gauna",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_622632-MLA51800277161_102022-F.webp",
    price: 40800,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Audi Q2 1-4 35 Tfsi Sport 150 Cv",
    brand: "Audi",
    model: "Q2",
    year: 2022,
    color: "Rojo",
    oil: "Nafta",
    gate: 5,
    kilometres: 0,
    descriptionShort: "Audi Q2 1.4 35 Tfsi Sport 150 Cv",
    descriptionLong:
      "EQUIPAMIENTO DESTACADO DE SERIE: *Climatizador automático confort/ *Control de velocidad crucero con limitador de velocidad/ *Audi Virtual Cockpit/ * Audi smartphone interface compatible con Android Auto y Apple CarPlay/ * Llantas de aleación, diseño de 5 radios en V, 7,0J x 17, neumáticos 215/55 R17/ * Respaldo del asiento trasero abatible 60/40/ * Volante de cuero en diseño de 3 radios con multifunción plus y levas de cambio/ * Sensores de estacionamiento delanteros y traseros con cámara de marcha atrás/ * Luces delanteras y traseras en tecnología LED/ * Rueda de repuesto de espacio reducido/ * 2 puertos USB delanteros/ * Navegador incorporado/ * Retrovisores exteriores con ajuste eléctrico y térmicos/ * Asientos tapizados en tela “Skript”/ * Airbag para conductor y acompañante frontales y laterales, y sistema de airbags para la cabeza/ * Asiento del acompañante ajustable en altura/ * Blade exterior en Gris Manhattan Metalizado/ * Sistema Start-Stop con recuperación de energía/",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_905121-MLA51088021311_082022-F.webp",
    price: 49900,
    condition: "Nuevo",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Audi A3 1-4 Tfsi Sedan Stronic 125cv",
    brand: "Audi",
    model: "A3",
    year: 2018,
    color: "Azul",
    oil: "Nafta",
    gate: 4,
    kilometres: 70000,
    descriptionShort: "Audi A3 1.4 Tfsi Sedan Stronic 125cv",
    descriptionLong:
      "excelente unidad, original de fabrica,  uso gerencial de la empresa, todos los servicios al dia, retirar tu unidad usada y dejanos la tuya en consignacion para vender",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_868666-MLA49376621790_032022-F.webp",
    price: 31900,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Audi Q7 3-0 Tfsi 333cv Tiptronic Quattro",
    brand: "Audi",
    model: "Q7",
    year: 2013,
    color: "Plateado",
    oil: "Nafta",
    gate: 5,
    kilometres: 90000,
    descriptionShort: "Audi Q7 3.0 Tfsi 333cv Tiptronic Quattro",
    descriptionLong:
      "Concesionario Audi Número #1 de la Argentina-- Tomamos todos los usados al mejor precio.-- Mejoramos cualquier oferta.-- Única mano.-- Precio conversable.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_748416-MLA48224177393_112021-F.webp",
    price: 36500,
    condition: "Usado",
    transmition: "Automatico",
    userId: 2,
    premium: false
  },
  {
    name: "Audi TT 2-0 T Fsi Stronic 211cv Coupé",
    brand: "Audi",
    model: "TT",
    year: 2012,
    color: "Blanco",
    oil: "Nafta",
    gate: 2,
    kilometres: 70000,
    descriptionShort: "Audi TT 2.0 T Fsi Stronic 211cv Coupé",
    descriptionLong:
      "Somos Rodz Cars, un equipo dedicado a realizar operaciones seguras y confiables con 15 años de trayectoria en el mercado.Todos nuestros vehículos están testeados.Contamos con gestaría propia lo cual garantiza obtener tu auto con toda la documentación en regla y transferido ( Sin excepción ) . Hacemos entrega de la unidad en el día.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_724489-MLA50746196283_072022-F.webp",
    price: 33500,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Audi A3 Sportback 1-4 Tsi Mt",
    brand: "Audi",
    model: "A3 Sportback",
    year: 2011,
    color: "Blanco",
    oil: "Nafta",
    gate: 5,
    kilometres: 158300,
    descriptionShort: "Audi A3 Sportback 1.4 Tsi Mt",
    descriptionLong:
      "AUDI A3 SPORTBACK 1.4, ALCANTARA Y TECHO. AÑO 2011 CON 158.300 KM, DEJAME TU CONSULTA POR ANTICIPO Y CUOTAS, PRECIO CONTADO U$D 16.500, FINANCIO SOLO CON DNI, TOMO USADO EN PARTE DE PAGO, ENTREGA INMEDIATA",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_985882-MLA51574714901_092022-F.webp",
    price: 16500,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Audi A5 3-0 Coupe Tfsi 272cv Stronic Quattro",
    brand: "Audi",
    model: "A5",
    year: 2013,
    color: "Gris",
    oil: "Nafta",
    gate: 2,
    kilometres: 81000,
    descriptionShort: "Audi A5 3.0 Coupe Tfsi 272cv Stronic Quattro",
    descriptionLong:
      "SOY PARTICUALR, 2DO DUEÑO, PINTURA %100 ORIGINAL, MOTOR 3.0 TURBO, AUTOMATICO, TRACCION INTEGRAL 272CV, MECANICA ORIGINAL. EL MAS FULL DE TODOS, LLAVE INTELIGENTE, XENON, TECHO PANORAMICO, BUTACAS ELECTRICAS, LLANTAS 19¨, AUTOHOLD, ETC. ATRAS NUNCA SE USO. AUXILIO SIN RODAR.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_832640-MLA50471767662_062022-F.webp",
    price: 33200,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Audi A5 2-0 Coupe Tfsi 225cv Multitronic",
    brand: "Audi",
    model: "A5",
    year: 2014,
    color: "Gris",
    oil: "Nafta",
    gate: 2,
    kilometres: 54000,
    descriptionShort: "Audi A5 2.0 Coupe Tfsi 225cv Multitronic",
    descriptionLong: "El vendedor no incluyó una descripción del producto",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_689509-MLA50408400522_062022-F.webp",
    price: 29675,
    condition: "Usado",
    transmition: "Automatico",
    userId: 3,
    premium: false
  },
  {
    name: "Audi A5 3-0 Coupe Tfsi 272cv Stronic Quattro",
    brand: "Audi",
    model: "A5",
    year: 2013,
    color: "Negro",
    oil: "Nafta",
    gate: 2,
    kilometres: 88000,
    descriptionShort: "Audi A5 3.0 Coupe Tfsi 272cv Stronic Quattro",
    descriptionLong:
      "Audi A5 Coupe Quattro, 550 hp,  Frenos nuevos. Discos nuevos,  Amortiguadores nuevos. Eibach pro kit, Escape 3” con cut outs y salidas originales. Lo mejor de ambos mundos. Kit de doble polea de supercharger. Mariposa de 81 mm, Watercooler, Cai",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_702162-MLA47922505647_102021-F.webp",
    price: 36000,
    condition: "Usado",
    transmition: "Automatico",
    userId: 4,
    premium: false
  },
  {
    name: "Toyota Hilux 2-8 Cd Srx 177cv 4x4",
    brand: "Toyota",
    model: "Hilux",
    year: 2008,
    color: "gris",
    oil: "diesel",
    gate: 4,
    kilometres: 20000,
    descriptionShort: "Toyota Hilux 2.8 Cd Srx 177cv 4x4",
    descriptionLong:
      "MOTOR 2.8 TURBODIESEL 204CV, 4X2, 4X4 Y 4X4 REDUCIDA CON ACCIONAMIENTO ELECTRÓNICO, FAROS DELANTEROS BI-LED, FAROS TRASEROS DE LED, LUCES DIURNAS DE LED, PROTECTOR DE CÁRTER HEAVY DUTY, SISTEMA DE INGRESO INTELIGENTE, SISTEMA DE INGRESO INTELIGENTE, CONECTIVIDAD ANDROID AUTO Y APPLE CARPLAY, SISTEMA DE AUDIO PREMIUM JBL CON 8 PARLANTES Y SUBWOOFER, ECO Y POWER MODE, ETC.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_869695-MLA51918662241_102022-O.webp",
    price: 43900,
    condition: "Usado",
    transmition: "Sincronico",
    userId: 4,
    premium: false
  },
  {
    name: "BMW X1 2-0 Sdrive 25i Xline 231cv",
    brand: "BMW",
    model: "X1",
    year: 2017,
    color: "negro",
    oil: "Nafta",
    gate: 5,
    kilometres: 117000,
    descriptionShort: "BMW X1 2.0 Sdrive 25i Xline 231cv",
    descriptionLong:
      "Excelente estado. Todos los servicios en concesionario oficial.Versión tope de gama. Traccion integral. Motor 2 litros de 231 CV. Aceptamos permutas.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_862199-MLA51107673007_082022-O.webp",
    price: 36300,
    condition: "Nuevo",
    transmition: "Automatico",
    userId: 6,
    premium: true
  },
  {
    name: "Chevrolet Corsa 1-4 Classic Gls",
    brand: "Chevrolet",
    model: "Corsa",
    year: 2009,
    color: "verde",
    oil: "nafta",
    gate: 4,
    kilometres: 119000,
    descriptionShort: "Chevrolet Corsa 1.4 Classic Gls",
    descriptionLong:
      "Chevrolet Corsa Classic 1.4 Gls 4ptas Año 2009 - LivMotors MUY BUENAS CONDICIONES MECANICAS!!! USADOS CON GARANTIA!!!",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_782419-MLA51920906270_102022-O.webp",
    price: 8203,
    condition: "Usado",
    premium: false,
    transmition: "Sincronico",
    userId: 7,
  },
];

const user = [
  {
    password: "An1frr3rt55y2uut",
    imgPerfil: "https://i.ibb.co/h9PXX01/usuario.png",
    firstName: "franco ",
    lastName: " navarro",
    mail: "Navarrofranco246@gmail.com",
    whatsApp: "5493876455689",
    address: "argentina, Cipolletti, San Martin 32",
  },

  {
    password: "Bglkdklm2uut",
    imgPerfil: "https://i.ibb.co/h9PXX01/usuario.png",
    firstName: "jose ",
    lastName: "lezema",
    mail: "Stx_jose@hotmail.com",

    whatsApp: "54938123545689",
    address: "venezuela, CABA, Avda de Mayo 532",
  },
  {
    password: "njbndcbdb",
    imgPerfil: "https://i.ibb.co/h9PXX01/usuario.png",
    firstName: "Julian ",
    lastName: "Vazquez",
    mail: "fvazquez@gmail.com",
    whatsApp: "549312331689",
    address: "Tucuman, San Miguel de Tucuman, Avda Mate de Luna 532",
  },

  {
    password: "hcdhiuiucsdlñ",
    imgPerfil: "https://i.ibb.co/h9PXX01/usuario.png",
    firstName: "Hector ",
    lastName: "Horacio Heredia",
    mail: "hector.horacio.heredia@gmail.com",
    whatsApp: "549123231689",
    address: "Buenos Aires, CABA, Macacha Guemes 15",
  },
  {
    password: "jijoiojipko",
    imgPerfil: "https://i.ibb.co/h9PXX01/usuario.png",
    firstName: "Luis Fernando ",
    lastName: "Alvarez",
    mail: "fernando_0694@hotmail.com",
    whatsApp: "54932356456",
    address: "La Rioja, San Martin 115",
    premium: true
  },

  {
    password: "kako",
    imgPerfil: "https://i.ibb.co/h9PXX01/usuario.png",
    firstName: "maicol ortiz",
    lastName: "Hernandez",
    mail: "maicolortiz28971@gmail.com",
    whatsApp: "54932356456",
    address: "Florencia, Caqueta-colombia",
    premium: true
  },

  {
    password: "jiaiojojhju",
    imgPerfil: "https://i.ibb.co/h9PXX01/usuario.png",
    firstName: "Fernando",
    lastName: "Alvarez",
    mail: "17-10837@usb.ve",
    whatsApp: "54932l4566",
    address: "Caracas, Venezuela ",
  },
  {
    password: "jiaiojojhju",
    imgPerfil: "https://i.ibb.co/h9PXX01/usuario.png",
    firstName: "Administrador",
    lastName: "Cars MARKET",
    mail: "maicolortiz2882@gmail.com",
    whatsApp: "4324442344",
    address: "Argentina,Cordoba ",
  },
];

module.exports = { car, user };
