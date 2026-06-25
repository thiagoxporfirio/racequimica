export type SubLine = {
	key: string;
	label: string;
	image: string;
	products: string[];
};

export type Sector = {
	key: string;
	label: string;
	image: string;
	description: string;
	tint: string;
	subLines: SubLine[];
};

export const sectors: Sector[] = [
	{
		key: "etanol",
		label: "Etanol",
		image: "https://imagens-cdn.canalrural.com.br/2026/06/preco-do-etanol-cai-em-18-estados-e-media-nacional-recua-para-r-4-18-por-litro-1024x576.png",
		description: "Floculação e fermentação sucroalcooleira",
		tint: "rgba(7,28,11,0.50)",
		subLines: [
			{
				key: "linha-etanol",
				label: "Linha Etanol",
				image: "https://imagens-cdn.canalrural.com.br/2026/06/preco-do-etanol-cai-em-18-estados-e-media-nacional-recua-para-r-4-18-por-litro-1024x576.png",
				products: [
					"Antibióticos",
					"Antiespumantes",
					"Anti-incrustantes para coluna",
					"Bactericidas",
					"Biocidas",
					"Dióxido de Cloro",
					"Dispersantes",
					"Neutralizantes de PH",
					"Nutrientes"
				]
			}
		]
	},
	{
		key: "acucar",
		label: "Açúcar",
		image: "https://siamigbioenergia.com.br/wp-content/uploads/2025/01/post1-corpo1-1024x682px.png",
		description: "Controle de inibidores e rendimento",
		tint: "rgba(7,28,11,0.44)",
		subLines: [
			{
				key: "linha-acucar",
				label: "Linha Açúcar",
				image: "https://siamigbioenergia.com.br/wp-content/uploads/2025/01/post1-corpo1-1024x682px.png",
				products: [
					"Anti-incrustante para evaporação",
					"Biocidas",
					"Clarificante de caldo",
					"Clarificante de xarope",
					"Condicionador de lodo",
					"Limpeza ácida para evaporadores",
					"Limpeza de superfície",
					"Lubrificantes de massa",
					"Tratamento de vapor"
				]
			}
		]
	},
	{
		key: "aguas",
		label: "Tratamento de Água",
		image: "https://images.ecycle.com.br/wp-content/uploads/2021/10/07121825/drop-of-water-gee46e2eb0_1920.jpg.webp",
		description: "Tratamento e controle microbiológico",
		tint: "rgba(4,20,8,0.54)",
		subLines: [
			{
				key: "osmose-reversa",
				label: "Osmose Reversa e Ultra filtração",
				image: "https://www.tecma-tecnologia.com.br/web/wp-content/uploads/2019/11/whatsapp-image-2019-10-23-at-155009.jpeg",
				products: [
					"Biocidas",
					"Desincrustante ácido",
					"Desincrustante alcalino",
					"Membranas para reposição",
					"Projetos de Novos Equipamentos",
					"Sequestrante de cloro"
				]
			},
			{
				key: "torres-resfriamento",
				label: "Torres Resfriamento",
				image: "https://www.quimica.com.br/wp-content/uploads/2014/08/torres_POST_.jpg",
				products: [
					"Antiespumantes",
					"Biocida não oxidante",
					"Biocida oxidante líquido",
					"Biocida oxidante tablete",
					"Dispersante inorgânico",
					"Dispersante orgânico",
					"Gerador de dióxido de cloro",
					"Gerador de NaClO",
					"Inibidor de corrosão"
				]
			},
			{
				key: "efluentes",
				label: "Processo de Efluentes",
				image: "https://www.grupoairslaid.com.br/wp-content/uploads/2020/02/FOTO_1.webp",
				products: [
					"Alcalinizantes",
					"Coagulantes",
					"Eliminador de odor"
				]
			},
			{
				key: "caldeiras",
				label: "Caldeiras",
				image: "https://estiva.com.br/var/userfiles/blogthumbs/d6f4f744fca95d6311aa819a08a32a3a.png",
				products: [
					"Ácido ascórbico",
					"Alcalinizantes",
					"Aminas Neutralizantes",
					"Antiespumantes",
					"Condicionador de lama",
					"Fosfatos",
					"Neutralizante de vapor",
					"Sequestrante de oxigênio",
					"Sulfitos"
				]
			},
			{
				key: "agua-potavel",
				label: "Água potável",
				image: "https://images.ecycle.com.br/wp-content/uploads/2021/10/07121825/drop-of-water-gee46e2eb0_1920.jpg.webp",
				products: [
					"Tricloro"
				]
			},
			{
				key: "eta",
				label: "ETA",
				image: "https://www.grupoairslaid.com.br/wp-content/uploads/2020/02/FOTO_1.webp",
				products: [
					"Hipoclorito de cálcio"
				]
			}
		]
	},
	{
		key: "industrial",
		label: "Diversos Processos",
		image: "https://agenciadenoticias.ibge.gov.br/images/agenciadenoticias/estatisticas_economicas/2023_07/PIM-Br_HOME_joao_paulo_ceglinski-PETROBRAS.jpg",
		description: "Soluções para processos industriais",
		tint: "rgba(7,28,11,0.46)",
		subLines: [
			{
				key: "diversos",
				label: "Diversos Processos",
				image: "https://agenciadenoticias.ibge.gov.br/images/agenciadenoticias/estatisticas_economicas/2023_07/PIM-Br_HOME_joao_paulo_ceglinski-PETROBRAS.jpg",
				products: [
					"Antiespumantes",
					"Coagulante Inorgânico",
					"Nutriente p/ tratamento biológico"
				]
			}
		]
	}
];
