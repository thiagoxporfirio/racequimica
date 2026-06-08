export type NavigationItem = {
  label: string;
  to: string;
};

export const navigationItems: NavigationItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Sobre Nos', to: '/sobre-nos' },
  { label: 'Licencas e Certificados', to: '/licencas-e-certificados' },
  { label: 'Contato', to: '/contato' },
];

export const certificateItems = [
  'Licenca Ambiental',
  'FISPQ Atualizada',
  'Controle de Transporte',
  'Laudo de Qualidade',
  'Rastreabilidade de lote',
  'Treinamento NR aplicado',
];

export const contactInfo = {
  title: 'Race Quimica',
  slogan: 'Quimica de alta performance',
  about: 'Profissionais com mais de 25 anos de experiencia.',
  address: 'Laura Vieira da Silva Bonbonati N 284 e 274, Sertaozinho, Sao Paulo, Brazil, 14.161-000',
  phone: '(16) 3948-0777',
  whatsapp: 'https://wa.me/551639480777',
  instagram: 'https://www.instagram.com/racequimica.ind.br/',
  linkedin: 'https://www.linkedin.com/',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Laura%20Vieira%20da%20Silva%20Bonbonati%20284%20Sertaozinho%20SP&output=embed',
};
