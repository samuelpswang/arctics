import React from 'react';
import '../style.css';
import '../responsive.css';
import img0 from '../img/tim.png';
import img1 from '../img/christine.png';
import img2 from '../img/alex.png';
import img3 from '../img/sean.png';
import img4 from '../img/tracy.png';
import img5 from '../img/avery.png';
import img6 from '../img/samuel.png';
import img7 from '../img/giny.png';
import img8 from '../img/amanda.png';
import img9 from '../img/lynn.png';


const members = [
    {
        index: 0, name: 'Tim',
        chName: '周致廷',
        image: img0,
        altText: 'image of Tim',
        position: '共同創辦人'
    },
    {
        index: 1, name: 'Christine',
        chName: '李韋蓁',
        image: img1,
        altText: 'image of Christine',
        position: '共同創辦人'
    },
    {
        index: 2, name: 'Alex',
        chName: '吳軒丞',
        image: img2,
        altText: 'image of Alex',
        position: '共同創辦人'
    },
    {
        index: 3, name: 'Sean',
        chName: '羅邦齊',
        image: img3,
        altText: 'image of Sean',
        position: '技術長'
    },
    {
        index: 4, name: 'Tracy',
        chName: '蔡凱薔',
        image: img4,
        altText: 'image of Tracy',
        position: '行銷長'
    },
    {
        index: 5, name: 'Avery',
        chName: '許雅宣',
        image: img5,
        altText: 'image of Avery',
        position: '前端工程師'
    },
    {
        index: 6, name: 'Samuel',
        chName: '王秉聖',
        image: img6,
        altText: 'image of Samuel',
        position: '前端工程師'
    },
    {
        index: 7, name: 'Giny',
        chName: '王于溱',
        image: img7,
        altText: 'image of Giny',
        position: '前端工程師'
    },
    {
        index: 8, name: 'Amanda',
        chName: '梁芮瑄',
        image: img8,
        altText: 'image of Amanda',
        position: '總設計師'
    },
    
    {
        index: 9, name: 'Lynn',
        chName: '黃淮苓',
        image: img9,
        altText: 'image of Lynn',
        position: 'UI/UX設計師'
    }   
];

const memberFirst = members.filter( e => e.index < 5);
const memberSecond = members.filter( e => e.index > 4);

export default function Members () {
    return (
        <section id="members">
            <h2 className="members__heading">團隊<br className="rwd-hide"></br><span className="members__heading-indent">成員</span></h2>
            <div className="members__first rwd-hide">
                {memberFirst.map( e=>{
                    if (e.index %2===0) { return(
                        <div className="members__box" key={e.index}>
                            <img className="members__photo" src={e.image} alt={e.altText}></img>
                            <h3 className="members__name">{e.chName}<br></br>{e.name}</h3><p className="members__position">{e.position}</p>
                        </div>
                    );}
                    else { return(
                        <div className="members__box members__flex_end" key={e.index}>
                            <img className="members__photo" src={e.image} alt={e.altText}></img>
                            <h3 className="members__name">{e.chName}<br></br>{e.name}</h3><p className="members__position">{e.position}</p>
                        </div>
                    );}
                })}
            </div>
            <div className="members__second rwd-hide">
                {memberSecond.map( e=>{
                    if (e.index %2===0) { return(
                        <div className="members__box" key={e.index}>
                            <img className="members__photo" src={e.image} alt={e.altText}></img>
                            <h3 className="members__name">{e.chName}<br></br>{e.name}</h3><p className="members__position">{e.position}</p>
                        </div>
                    );}
                    else { return(
                        <div className="members__box members__flex_end" key={e.index}>
                            <img className="members__photo" src={e.image} alt={e.altText}></img>
                            <h3 className="members__name">{e.chName}<br></br>{e.name}</h3><p className="members__position">{e.position}</p>
                        </div>
                    );}
                })}
            </div>
            <div className="r-members rwd-show">
                {members.map( e=>{
                    return(
                        <div className="r-members__box" key={e.index+7}>
                            <img className="members__photo" src={e.image} alt={e.altText}></img>
                            <h3 className="members__name">{e.chName}<br></br>{e.name}</h3><p className="members__position">{e.position}</p>
                        </div>)
                })}
            </div>
        </section>
    );
}