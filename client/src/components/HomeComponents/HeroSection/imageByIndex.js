export const images = [
    'https://res.cloudinary.com/dztkzhtla/image/upload/v1707668871/WebDesys-Main%20Website/tgszzsmtxyn5qlvhtqpo.webp',
    'https://res.cloudinary.com/dztkzhtla/image/upload/v1707668869/WebDesys-Main%20Website/likgopwaq1rnyvkcpwn0.webp',
    'https://res.cloudinary.com/dztkzhtla/image/upload/v1707668870/WebDesys-Main%20Website/eww658ezaxmbhjzym2dj.webp',
    'https://res.cloudinary.com/dztkzhtla/image/upload/v1707668869/WebDesys-Main%20Website/y6yyfgqtkhcqv9w3gysv.webp',
    'https://res.cloudinary.com/dztkzhtla/image/upload/v1707668867/WebDesys-Main%20Website/cpklftwq6dtjirhgboaz.webp',
    'https://res.cloudinary.com/dztkzhtla/image/upload/v1707669345/WebDesys-Main%20Website/gj04ig7y5lhgn7gtpnsu.webp',
    // 'https://res.cloudinary.com/ddffeufbq/image/upload/v1697103595/webdesys/3_zzbees.webp',
    // 'https://res.cloudinary.com/ddffeufbq/image/upload/v1697103595/webdesys/1_tdtyuv.webp',
    // 'https://res.cloudinary.com/ddffeufbq/image/upload/v1697103595/webdesys/2_fje3nk.webp',
    // 'https://res.cloudinary.com/ddffeufbq/image/upload/v1697103594/webdesys/4_pmucni.webp',
    // 'https://res.cloudinary.com/ddffeufbq/image/upload/v1697103594/webdesys/5_1_wycmjz.webp',
    // 'https://res.cloudinary.com/ddffeufbq/image/upload/v1697103594/webdesys/6_1_bfqo6q.webp',
]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
