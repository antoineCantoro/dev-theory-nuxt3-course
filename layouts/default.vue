<template>
    <div class="flex h-full">

        <!-- SIDEBAR -->
        <div class="fixed top-0 bottom-0 left-0 w-64 py-5 bg-primaryc">
            <h1 class="mt-5 text-xl font-bold px-5">DT Merch</h1>
            
            <ul class="menu bg-base-100 w-56">
                <li><a>Item 1</a></li>
                <li><a class="active">Item 2</a></li>
                <li><a>Item 3</a></li>
            </ul>
        </div>

        <!--  -->
        <div class="w-full pl-64 ">
            <div class="p-5 ">
                <slot />
            </div>
        </div>
    </div>
</template>