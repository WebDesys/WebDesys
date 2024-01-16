export const images = [
    'https://res.cloudinary.com/ddffeufbq/image/upload/v1697103595/webdesys/3_zzbees.webp',
    'https://res.cloudinary.com/ddffeufbq/image/upload/v1697103595/webdesys/1_tdtyuv.webp',
    'https://res.cloudinary.com/ddffeufbq/image/upload/v1697103595/webdesys/2_fje3nk.webp',
    'https://res.cloudinary.com/ddffeufbq/image/upload/v1697103594/webdesys/4_pmucni.webp',
    'https://res.cloudinary.com/ddffeufbq/image/upload/v1697103594/webdesys/5_1_wycmjz.webp',
    'https://res.cloudinary.com/ddffeufbq/image/upload/v1697103594/webdesys/6_1_bfqo6q.webp',
]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
