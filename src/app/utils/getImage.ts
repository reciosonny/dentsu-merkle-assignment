import img0 from '@/app/assets/img/0.jpg';
import img1 from '@/app/assets/img/1.jpg';
import img2 from '@/app/assets/img/2.jpg';
import img3 from '@/app/assets/img/3.jpg';
import img4 from '@/app/assets/img/4.jpg';
import img5 from '@/app/assets/img/5.jpg';
import img6 from '@/app/assets/img/6.jpg';
import img7 from '@/app/assets/img/7.jpg';
import img8 from '@/app/assets/img/8.jpg';
import img9 from '@/app/assets/img/9.jpg';



export const getImage = (id: number) => {  
    switch (id) {
        case 0:
            return img0;
        case 1:
            return img1;
        case 2:
            return img2;
        case 3:
            return img3;
        case 4:
            return img4;
        case 5:
            return img5;
        case 6:
            return img6;
        case 7:
            return img7;
        case 8:
            return img8;
        case 9:
            return img9;
        default:
            return img0;
    }
}