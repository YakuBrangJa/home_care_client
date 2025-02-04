import {Button, buttonVariants} from "@/components/ui/button"
import {A} from "@solidjs/router"
import {BsArrowRight} from "solid-icons/bs"
import {CgArrowRight} from "solid-icons/cg"
import {IoHammerOutline, TbBath, TbLogicAnd, TbRazor, TbShovel} from "@/components/icons/Tabler.icons"
import {darkenColor} from "@/utils/darkenColor"

function LandingPage () {
  return (
    <main>
      <section class="" id="home-hero">
        <div class="container flex items-center justify-center  h-[600px] ">
          <div>
            <h1 class="text-5xl font-semibold text-center leading-[1.4] text-slate-800">
              Reliable Home Services<br /> Anytime You Need
            </h1>
            <p class="text-center mt-5 text-lg text-slate-500 font-light">
              Book expert home maintenance with ease.
            </p>
            <div class="flex items-center justify-center mt-10">
              <A href="/user/sign-up" class={buttonVariants({size: 'lg', class: 'gap-2 py-[22px]'})}>
                Get Started
                <CgArrowRight size={20} />
              </A>
            </div>
          </div>
        </div>
      </section>
      <section id="home-services" class="bg-primary pt-[70px] pb-[90px] " style={{
        'background-color': darkenColor('#009463', 0.2)
      }}>
        <div class="container !max-w-[1100px]">
          <h2 class="text-4xl font-semibold text-white text-center">
            Our Expert Services
          </h2>
          <p class="text-center mt-5 text-slate-200 font-light">
            We provide top-notch home maintenance services, tailored to your needs
          </p>
          <div class="grid grid-cols-3 gap-6 justify-center text-slate-50 mt-10">
            <div class=" rounded-xl bg-slate-300/10 p-5">
              <div class="mb-10">
                <TbBath size={50} />
              </div>
              <div class="font-semibold text-xl">Plumbing</div>
              <div class="text-slate-200">Leak repairs, pipe installations, and more.</div>
            </div>
            <div class=" rounded-xl bg-slate-200/10 p-5">
              <div class="mb-10">
                <IoHammerOutline size={50} />
              </div>
              <div class="font-semibold text-xl">Carpentry</div>
              <div class="text-slate-200">Custom furniture, wood repairs, and home renovations.</div>
            </div>
            <div class=" rounded-xl bg-slate-200/10 p-5">
              <div class="mb-10">
                <TbLogicAnd size={50} />
              </div>
              <div class="font-semibold text-xl">Electrical</div>
              <div class="text-slate-200">Safe and efficient electrical repairs and installations.</div>
            </div>
            <div class=" rounded-xl bg-slate-200/10 p-5">
              <div class="mb-10">
                <TbRazor size={50} />
              </div>
              <div class="font-semibold text-xl">Cleaning</div>
              <div class="text-slate-200">Deep cleaning, home sanitization, and maintenance</div>
            </div>
            <div class=" rounded-xl bg-slate-200/10 p-5">
              <div class="mb-10">
                <TbShovel size={50} />
              </div>
              <div class="font-semibold text-xl">Gardening</div>
              <div class="text-slate-200">Lawn care, plant maintenance, and landscaping services</div>
            </div>

          </div>
        </div>
      </section>
      <section id="home-footer">

      </section>
    </main>
  )
}

export default LandingPage
