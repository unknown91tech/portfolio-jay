import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content , DateField ,isFilled } from "@prismicio/client";



export default  function ContentBody({page}: {page:Content.BlogPostDocument | Content.ProjectDocument}) {
    function formateDate(date: DateField){
        if(isFilled.date(date)){

            const dateOptions: Intl.DateTimeFormatOptions = {
            weekday: "long",
            year: "numeric",
            month:"long",
            day: "numeric"
        }
        return new Intl.DateTimeFormat("en-US" , dateOptions).format(new Date(date))
    }
    }

    const formattedDate = formateDate(page.data.date)

  return (
  <Bounded as="article">
    <div className="rounded-2xl border-2 border-neutral-600 bg-neutral-900 px-4 py-10 md:px-8 md:py-20">
        <Heading as="h2" >{page.data.title}</Heading>
        <div className="flex gap-4 text-yellow-400">
            {page.tags.map((tag)=> (
                <span key={tag}>{tag}</span>
            ))}
        </div>
        <p className="mt-8 border-b border-neutral-500 text-xl font-medium text-slate-300 ">{formattedDate}</p>
        <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
            <SliceZone slices={page.data.slices} components={components} />
        </div>
        
    </div>
    
  </Bounded>
  );
}



