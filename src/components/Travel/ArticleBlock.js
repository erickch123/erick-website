
export default function ArticleBlock(props) {

    const {image,altname,title,date,link,description} = props
    return (

    <div class="mb-6 lg:mb-0">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src={image} class="w-full" alt={altname} />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </div>

        <h5 class="mb-3 text-lg font-bold">{title}</h5>
        {/* <div class="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" class="mr-2 h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
          </svg>
          
        </div> */}
        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Published <u>{date}</u></small>
        </p>
        <p class="text-neutral-500 dark:text-neutral-300">
          {description}
        </p>
        <p class="text-neutral-500 dark:text-neutral-300">
          {link}
        </p>
    </div>
    )


}