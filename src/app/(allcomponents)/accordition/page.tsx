import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <div>
      <div className="bg-gray-50 lg:ml-80 lg:mr-80">
        <p className="text-gray-400 text-xs font-[500]">ADDITIONAL BENEFITS</p>
        <h1 className="text-3xl font-bold  mb-4">
          Everything RealOut does to sell or <br /> rent out your property
          faster…
        </h1>
        <div>
          <p className="text-xs text-gray-400 font-[400] mb-4">
            Post free property ads on 99acres.com, India’s No. 1 property
            portal, to find genuine buyers and tenants. If you are the owner of
            a house, flat, apartment, villa, or any other residential property,
            you can conveniently post property for rent or sale on our digital
            platform. Also, find your ideal tenants and buyers quickly to lease
            or sell your land, office space, shop, showroom, or any other
            commercial real estate. Whether you are a property owner, builder or
            broker, you can rent or sell property online on 99acres.com with
            ease.
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-400 font-[400] mb-4">
            99acres.com is one of the most trustworthy portals buyers and
            tenants online for flats, independent houses, offices, shops,
            showrooms, warehouses, land and factories. What makes 99acres.com
            unique is our high-quality website traffic and reach to millions of
            households across India and abroad, who are looking to buy or rent
            residential or commercial properties across India
          </p>
        </div>
        <button className="bg-blue-500 p-2 text-xs rounded border border-gray-300 mb-10 text-white">
          Begin To Post Your Property
        </button>
      </div>

      <div className="bg-gray-50 lg:ml-80 lg:mb-10">
        <div className="grid md:w-180">
          <Accordion type="single" collapsible className="w-full">
            <div>
              <p className="text-xs text-gray-600 text-bold">
                KNOW MORE ABOUT POSTING ON RealOut
              </p>
              <h1 className="text-3xl font-[600]">
                Frequently Asked Questions
              </h1>
            </div>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What type of property I can post on RealOut for selling/renting?
              </AccordionTrigger>
              <AccordionContent>
                As an owner, agent, or builder, you can post all types of
                residential and commercial properties for rent, lease, or sale.
                On RealOut, millions of people search for flats, houses, plots,
                office space, shops, showrooms, warehouses, agricultural and
                commercial land, among others. RealOut is the best property
                portal to sell or rent your property fast!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Is posting property for selling/renting on RealOut FREE?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can post your property listing online for sale or rent
                on RealOut for FREE. There are no charges involved. All
                buyer/tenant enquiries will be shared with you completely free
                of cost.
                <br />
                You can drop a ‘Hi’ on WhatsApp at 742 819 7035 to post easily
                for FREE.
                <br />
                You can also explore our
                <a href="">additional services</a>
                to attract even more buyers and tenants.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I sell/rent out my property on my own without paying
                brokerage?
              </AccordionTrigger>
              <AccordionContent>
                Yes, as a property owner, you can sell property online as well
                as post property for rent on RealOut using our post free
                property ads service. Your property will be visible to thousands
                of buyers and tenants visiting us daily, without involving any
                real estate agents
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How can I rent/sell my property faster?
              </AccordionTrigger>
              <AccordionContent>
                Make your property listings as detailed and informative as
                possible to get more visibility and relevant buyers or tenants.
                Mention all the details available such as exact location,
                property size, expected price or monthly rent, and features that
                set your property apart​.
                <br />
                Also, add photos to your property as they attract more buyers
                and tenants.​
                <br />
                You can also upgrade your free property listing to a premium
                listing to get further visibility. With the premium listing
                plan, your property appears at the top. Moreover, our
                relationship manager helps you shortlist serious buyers &
                tenants, plan site visits and conduct professional photoshoots &
                videography.​
                <br />
                For more information, please explore our
                <a href="">Owner Services </a>
                or you can call us at 1800-41-99099​
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Will I get genuine buyers & tenants even with free property
                listings?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you will be able to get genuine enquiries even on free
                property listings. <br /> RealOut is the only platform where you
                get unlimited enquiries (with no cap) even on a free property
                ad. You should add detailed information and appealing photos
                receive maximum enquiries from prospective buyers or tenants.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                How do I post a property on RealOut for renting/selling? ​
              </AccordionTrigger>
              <AccordionContent>
                Posting a property for renting or selling on RealOut is a very
                simple and quick process. Follow these steps to post your
                commercial or residential property ad for free on RealOut, the
                best property site in India:
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
