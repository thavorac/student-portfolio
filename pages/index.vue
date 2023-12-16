<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 xxl:col-span-9">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 mt-6 -mb-6 intro-y">
          <div
            class="alert alert-dismissible show box bg-theme-3 text-white flex items-center mb-6"
            role="alert"
          >
            <span>{{ $t('dashboard') }}</span>
          </div>
        </div>
        <div class="col-span-12">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">General Report</h2>
            <a
              href=""
              class="ml-auto flex items-center text-theme-1 dark:text-theme-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-refresh-ccw w-4 h-4 mr-3"
              >
                <polyline points="1 4 1 10 7 10"></polyline>
                <polyline points="23 20 23 14 17 14"></polyline>
                <path
                  d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
                ></path>
              </svg>
              Reload Data
            </a>
          </div>

          <div class="grid grid-cols-12 gap-6 mt-5">
            <!-- BEGIN: User Application Menu -->
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-shopping-cart report-box__icon text-theme-10"
                    >
                      <path
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      ></path>
                    </svg>
                    <div class="ml-auto hidden">
                      <div
                        class="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                      >
                        33%
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-chevron-up w-4 h-4 ml-0.5"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6 hidden">
                    4.710
                  </div>
                  <div class="text-base text-gray-600 mt-1">
                    {{ $t('authenticator.userApplication') }}
                  </div>
                </div>
              </div>
            </div>
            <!-- END: User Application Menu -->

            <!-- BEGIN: User Registered Menu -->
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-credit-card report-box__icon text-theme-11"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <div class="ml-auto hidden">
                      <div
                        class="report-box__indicator bg-theme-6 tooltip cursor-pointer"
                      >
                        2%
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-chevron-down w-4 h-4 ml-0.5"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6 hidden">
                    3.721
                  </div>
                  <div class="text-base text-gray-600 mt-1">
                    {{ $t('authenticator.userRegistered') }}
                  </div>
                </div>
              </div>
            </div>
            <!-- END: User Registered Menu -->

            <!-- BEGIN: Schools Information Menu -->
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-monitor report-box__icon text-theme-12"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>
                    <div class="ml-auto hidden">
                      <div
                        class="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                      >
                        12%
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-chevron-up w-4 h-4 ml-0.5"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6 hidden">
                    2.149
                  </div>
                  <div class="text-base text-gray-600 mt-1">
                    {{ $t('authenticator.schoolsInformation') }}
                  </div>
                </div>
              </div>
            </div>
            <!-- END: Schools Information Menu -->

            <!-- BEGIN: Category (Major) Menu -->
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-user report-box__icon text-theme-9"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                    <div class="ml-auto hidden">
                      <div
                        class="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                      >
                        22%
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-chevron-up w-4 h-4 ml-0.5"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6 hidden">
                    152.040
                  </div>
                  <div class="text-base text-gray-600 mt-1">
                    {{ $t('authenticator.categoryMajor') }}
                  </div>
                </div>
              </div>
            </div>
            <!-- END: Category (Major) Menu -->

            <!-- BEGIN: Enrollable Subjects Menu -->
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-monitor report-box__icon text-theme-12"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>
                    <div class="ml-auto hidden">
                      <div
                        class="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                      >
                        12%
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-chevron-up w-4 h-4 ml-0.5"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6 hidden">
                    2.149
                  </div>
                  <div class="text-base text-gray-600 mt-1">
                    {{ $t('authenticator.schoolsInformation') }}
                  </div>
                </div>
              </div>
            </div>
            <!-- END: Sala-Connect Menu -->

            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-user report-box__icon text-theme-9"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                    <div class="ml-auto hidden">
                      <div
                        class="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                      >
                        22%
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-chevron-up w-4 h-4 ml-0.5"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6 hidden">
                    152.040
                  </div>
                  <div class="text-base text-gray-600 mt-1">
                    {{ $t('homepage.salaConnect') }}
                  </div>
                </div>
              </div>
            </div>
            <!-- END: Sala-Connect Menu -->

            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-user report-box__icon text-theme-9"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                    <div class="ml-auto hidden">
                      <div
                        class="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                      >
                        22%
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-chevron-up w-4 h-4 ml-0.5"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6 hidden">
                    152.040
                  </div>
                  <div class="text-base text-gray-600 mt-1">Student Loan</div>
                </div>
              </div>
            </div>
            <!-- END: Student Loan Table -->

            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-credit-card report-box__icon text-theme-11"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <div class="ml-auto hidden">
                      <div
                        class="report-box__indicator bg-theme-6 tooltip cursor-pointer"
                      >
                        2%
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-chevron-down w-4 h-4 ml-0.5"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6 hidden">
                    3.721
                  </div>
                  <div class="text-base text-gray-600 mt-1">Campaign</div>
                </div>
              </div>
            </div>
            <!-- END: Sala-Connect Menu -->
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="p-5 box">
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-user report-box__icon text-theme-9"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                    <div class="hidden ml-auto">
                      <div
                        class="cursor-pointer report-box__indicator bg-theme-9 tooltip"
                      >
                        22%
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-chevron-up w-4 h-4 ml-0.5"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="hidden mt-6 text-3xl font-medium leading-8">
                    152.040
                  </div>
                  <div class="mt-1 text-base text-gray-600">User Guide</div>
                </div>
              </div>
            </div>
            <!-- END: User Guide Menu -->
          </div>
          <!-- END: Campaign Table -->
        </div>
      </div>
    </div>
    <div class="col-span-12 xxl:col-span-3">
      <div class="xxl:border-l border-theme-5 -mb-10 pb-10">
        <div class="xxl:pl-6 grid grid-cols-12 gap-6">
          <div class="h-[100vh]"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dasbhoard',
  layout: 'default',
  middleware: 'auth',
  head: {
    title: 'Dashboard',
  },
}
</script>
