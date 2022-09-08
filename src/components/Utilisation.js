import React from 'react';
import utilisationImg from '../images/utilisation.jpg';

const Utilisation = () => {
  return (
		<main className="basis-[70%] ">
			<h1 className="font-bellefair font-bold text-[2.5rem] md:text-[4rem] md:font-regular">
				Utilisation
			</h1>
			<div className="font-barlow font-regular text-[14px]">
				<em>by</em> John Doe <em>at</em> 18th, Dec, 2020
			</div>
			<div className="my-8 mx-auto max-w-[90%]">
				<img className="w-full" src={utilisationImg} alt="utilisation" />
			</div>
			<p className="mt-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
				harum possimus modi sapiente, sunt fugiat eligendi nihil minima,
				accusamus facilis ullam doloremque necessitatibus distinctio iste!
				Praesentium alias consequatur corrupti nesciunt. Culpa dolor repellat
				quisquam beatae, repellendus delectus nostrum asperiores voluptates
				eveniet facere voluptas ipsa voluptatem itaque excepturi, est id quam
				quia hic unde ad. Accusantium quasi impedit quod animi iusto! Excepturi
				veniam quas libero dicta nesciunt suscipit vel, numquam iste ipsum,
				itaque ea necessitatibus harum! Eos voluptates corporis consequatur.
				Dolorem adipisci officia fuga ipsam dolores? In laborum veritatis quia
				eius. Ea hic praesentium cum minus nam sunt fugiat? Perspiciatis,
				distinctio totam. Ea exercitationem quidem maxime saepe eos, corporis
				animi ipsum sapiente nobis voluptas recusandae eveniet repudiandae.
				Minima quo harum ut.
			</p>
		</main>
	);
}

export default Utilisation