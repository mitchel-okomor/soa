import React from 'react';

function Faq() {
  const faqData = [
    {
      title: 'What is Spirits Of Africa?',
      body: "Spirits Of Africa is a project focused on building a community of African Youths. We want a community that is open to every African, considering specially those who don't know what NFTs are or what they are about. We want to build a community with key focus on retention and teaching the true African history, developing a new African youth by leveraging on the blockchain technology. Aiding them find their true self and what their gifting are while helping them build on it. Spirits Of Africa is for us all.",
    },
    {
      title: 'Why should I support this project? What is unique about it?',
      body: 'SOA is a project that is here to be more of a solution, it is here to help make things easier for us, it requires that we believe in ourselves once again and acknowledge that working together in this new future will be easier. With this project we hope to build a community that makes it easier to onboard people first into the NFT space and by extension the Metaverse. SOA community is aimed to be a self supporting ecosystem for Africans with unique skills/talent and also those who seek to learn these skills. This project is unique as it is the collective of the African spirits, regardless of country, tribe or creed, as long as we are Africans. A major goal of the project is developing the African youth and helping them attain full potential, hereby giving them the chance to live a much better and easier life.',
    },
    {
      title: 'Who are behind Spirits Of Africa?',
      body: 'A group of five young Africans with a zeal to rewrite the narrative and build Africa from Africa. Mostly introverts, but we have chosen to break out of our shells and come out to the highest peaks to preach the gospel of Human Resource Development. Three of the 5 are creative graphic artists and the other two are talented young men who fell in Love with the idea and are willing to give 200 to the success of the project. So far, we have made significant progress and we will keep it going.',
    },
    {
      title:
        'What is the first collection going to be about and how was it created?',
      body: 'The first collection is going to be about Sango, the god of thunder. The character we use in creating the Sango is actually one of us on the team who set up a small studio in his place and took pictures for us so we can use in coming up with the illustration, lol...it was really fun. So the illustration was more of a generic style, it was as the Spirits led us, and we created different traits for Sango, which will be generated for each NFT.',
    },
    {
      title: "What's the plan for the Launch?",
      body: "Definitely a launch party, that's all I will say for now until we draw closer to the date set. lol....sorry.",
    },
    {
      title: 'What is the Roadmap like?',
      body: `So basically first of is putting ourselves out there for everyone to come support genuinely, work together towards a successful launch as it will kick off everything we have planned. So from "Our humble beginning" we will get to "Walk with the Spirits", follow "As the Spirits leads" us, we will meet a Spirit that will introduce itself as "A god", we will also discover "A new Spirit" by the way and at this stage I think we should be "Dining with the Spirits" cause we've seen too many now. And as we dine with them, we become "One with the Spirits" and as we are one with the Spirits, "The Spirits will abide with us" and the we journey down "Into the Spirit Land" where we will call our home and grow. You can read more about the roadmap at #🛣│roadmap`,
    },
    {
      title: 'What about utility?',
      body: `We will be dropping lot of NFTs so holding one will grant you a pass into our community on the Metaverse, so better hold on to that, we will be building a library filled with African histories, premium courses of different skills that you can make use of on the Blockchain technology, we will also host events in different African countries, so you really need to hold that NFT, they are pretty rare. Then we will launch our game which will introduce the use of different elements for different gods as we watch them battle. We will create comic books for the gods and it can only be accessed with the nft. Also there are some other benefits we can't talk about yet until the project launches, we really prefer action than fine print.`,
    },
  ];

  const FaqCards = (): any => {
    const toglePanel = (index: number) => {
      const id = 'faq' + index;
      const hrId = 'hr' + index;
      const el = document.getElementById(id)!;
      const hrEl = document.getElementById(hrId)!;

      if (el.classList.contains('hide')) {
        el.classList.remove('hide');
        hrEl.classList.remove('hide');
      } else {
        el.classList.add('hide');
        hrEl.classList.add('hide');
      }
    };

    return faqData.map((item, index) => (
      <div className="faq-card" key={index}>
        <div className="card-header">
          <h4
            onClick={(e) => {
              const el: any = e.target;
              if (el.nextSibling.innerText === '+') {
                el.nextSibling.innerText = '-';
              } else {
                el.nextSibling.innerText = '+';
              }
              toglePanel(index);
            }}
          >
            {item.title}
          </h4>
          <button
            className="add-btn"
            onClick={(e) => {
              const el: any = e.target;
              console.log(el.innerText);
              if (el.innerText === '+') {
                el.innerText = '-';
              } else {
                el.innerText = '+';
              }
              toglePanel(index);
            }}
          >
            +
          </button>
        </div>

        <hr className="hide" id={'hr' + index} />
        <div className="card-body hide" id={'faq' + index}>
          <p>{item.body}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="faq container">
      <div className="faq-cards">
        <h2>
          <b>FAQ</b>
        </h2>
        <div>
          <FaqCards />
        </div>
      </div>
    </div>
  );
}

export default Faq;
