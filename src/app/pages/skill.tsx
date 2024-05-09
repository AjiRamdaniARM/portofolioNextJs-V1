import Link from 'next/link';
import "../styles/globalFont.scss"
import "../styles/style.scss"


export default function Skill() {

  const items = [
    {
      'Image' : 'https://firebasestorage.googleapis.com/v0/b/portofolio-3c1ab.appspot.com/o/image%2FSuba%20Arch%20Studio%20(%40suba_arch)%20%E2%80%A2%20Instagram%20photos%20and%20videos%20-%20Google%20Chrome%2029_04_2024%2022.49.03.png?alt=media&token=9e28a721-e550-41aa-9664-43b2491d5075',
      'Label' : 'Exprience',
      'Instansi' : 'Suba Arch Studio',
      'Desk' : 'Internship for 3 months and work as a web developer',
      'Url' : 'https://www.instagram.com/suba_arch/'
    },
    {
      'Image' : 'https://firebasestorage.googleapis.com/v0/b/portofolio-3c1ab.appspot.com/o/image%2FSuba%20Arch%20Studio%20(%40suba_arch)%20%E2%80%A2%20Instagram%20photos%20and%20videos%20-%20Google%20Chrome%2029_04_2024%2022.49.19.png?alt=media&token=f12b7533-8d4e-42a3-9656-087a2b958078',
      'Label' : 'Education',
      'Instansi' : 'Smk Terpadu Ibadurrahman',
      'Desk' : 'enrolled in the software engineering major for 3 years',
      'Url' : 'https://www.instagram.com/smk_terpadu_ibaadurrahman/'
    },
    {
      'Image' : 'https://firebasestorage.googleapis.com/v0/b/portofolio-3c1ab.appspot.com/o/image%2FSuba%20Arch%20Studio%20(%40suba_arch)%20%E2%80%A2%20Instagram%20photos%20and%20videos%20-%20Google%20Chrome%2029_04_2024%2022.49.49.png?alt=media&token=0c5f0bc9-4399-49ef-898b-a2c0e283cdc2',
      'Label' : 'Exprience',
      'Instansi' : 'Freelance AriDev',
      'Desk' : 'worked for 2 years as a freelance graphic designer and web developer and got 100 clients.',
      'Url' : 'https://www.instagram.com/ajiramdani_04/'
    },
    {
      'Image' : 'https://firebasestorage.googleapis.com/v0/b/portofolio-3c1ab.appspot.com/o/image%2FSuba%20Arch%20Studio%20(%40suba_arch)%20%E2%80%A2%20Instagram%20photos%20and%20videos%20-%20Google%20Chrome%2029_04_2024%2022.49.40.png?alt=media&token=ecb05f0f-cd6b-44fc-84b7-ab93dfbf6e56',
      'Label' : 'Exprience',
      'Instansi' : 'IT Club ',
      'Desk' : 'Served as Chairperson from 2022 to 2023 in the IT CLUB extracurricular program.',
      'Url' : 'https://www.instagram.com/ajiramdani_04/'
    }
  ];
  
    return (
        <div className="container">
          <div className="block">
            <h1 className='text-center text-5xl font-bold ComBold text-edukasi'>Education and Exprience</h1>
            <div className=
            "flex flex-wrap justify-center py-5 items-center ">
            {items.map((item, index) => (
              <div key={index}>
                <div className="container max-w-sm p-2 shadow-md">
                  <div className="box-co w-80  bg-[#18181B]  rounded-2xl hover:scale-105 transition duration-100  hover:shadow-md shadow-lg">
                    <div className="box-image bg-cover object-cover w-full p-3 rounded-">
                      <img src={item.Image} className="rounded-2xl" alt="Logo" />
                    </div>
                    <div className="body">
                      <div className="header px-5 py-2">
                        <div className="con-text w-30 bg-[#000000] w-28 h-7 text-center rounded-lg text-white font-bold">
                          {item.Label}
                        </div>
                        <div className="judul ComBold py-2 text-3xl text-white">
                        {item.Instansi}
                        </div>
                        <div className="desk text-white ">
                        {item.Desk}
                        </div>
                      </div>
                      <div className="bottom px-5 py-5">
                        <Link href={item.Url}>
                          <button className="bg-blue-500 text-white duration-500 hover:scale-105 hover:shadow-md hover:bg-slate-500 rounded-xl w-full py-2 hover:transition">View More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
))}
</div>
          </div>
        </div>
    );
}
