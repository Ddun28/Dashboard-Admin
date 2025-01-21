import AccordionFaqs from "./components/AccordionFaqs/AccordionFaqs";

export default function page() {
  return (
    <div className="max-w-4xl mx-auto bg-background shadow-md rounded-lg p-6">
      <h2 className="text-3xl mb-8">FAQS</h2>
      <div className="mb-5">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iure quia nam aspernatur iste nisi inventore? Dicta, mollitia dolorem voluptas minima magnam corrupti neque laborum, ut, eius deserunt sunt at?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium explicabo quod expedita deleniti nostrum voluptatum dolorum vero autem! Rerum minus nam quidem voluptates nostrum esse recusandae totam cupiditate illum.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ipsa ut dolor quam voluptas, nisi praesentium quia quidem suscipit distinctio officia. Illum earum nemo molestiae veniam suscipit vero dolore optio?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis aut accusamus reiciendis quaerat ex nulla dolore ab, modi provident eius quo quidem pariatur harum iure unde itaque inventore aspernatur ducimus.</p>
      </div>
      <AccordionFaqs />
    </div>
  )
}
