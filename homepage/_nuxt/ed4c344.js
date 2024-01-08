(window.webpackJsonp = window.webpackJsonp || []).push([
    [32, 20],
    {
        386: function (t, e, o) {
            "use strict";
            o.r(e);
            var n = {
                    name: "Category",
                    data: function () {
                        return {
                            type: 1,
                            titleMessage: "สินค้าและบริการ",
                            buttonMessage: "เติมเงินเกมส์ออนไลน์",
                            categories: [],
                        };
                    },
                    mounted: function () {
                        this.toggle();
                    },
                    methods: {
                        toggle: function () {
                            var t = this;
                            1 == this.type
                                ? ((this.type = 0), (this.titleMessage = "สินค้าและบริการ"), (this.buttonMessage = "เติมเงินเกมส์ออนไลน์"))
                                : ((this.type = 1), (this.titleMessage = "เติมเงินเกมส์ออนไลน์"), (this.buttonMessage = "สินค้าและบริการ")),
                                this.$axios.$get("category/type/".concat(this.type, "?page=1&limit=100")).then(function (e) {
                                    var o = e.result;
                                    t.categories = o.data;
                                });
                        },
                    },
                },
                l = o(40),
                component = Object(l.a)(
                    n,
                    function () {
                        var t = this,
                            e = t._self._c;
                        return e(
                            "section",
                            {
                                attrs: {
                                    id: "store-category",
                                },
                            },
                            [
                                e(
                                    "b-container",
                                    [
                                        e(
                                            "b-row",
                                            [
                                                e(
                                                    "b-col",
                                                    {
                                                        staticClass: "mt-1 d-xl-block d-md-block d-none",
                                                        attrs: {
                                                            cols: "12",
                                                            xl: "6",
                                                        },
                                                    },
                                                    [e("h1", [t._v(t._s(t.titleMessage))])]
                                                ),
                                                t._v(" "),
                                                e(
                                                    "b-col",
                                                    {
                                                        staticClass: "mt-1 d-block d-xl-none d-md-none py-3",
                                                        attrs: {
                                                            cols: "3",
                                                            xl: "6",
                                                        },
                                                    },
                                                    [e("h3", [t._v("สินค้า")])]
                                                ),
                                                t._v(" "),
                                                e(
                                                    "b-col",
                                                    {
                                                        staticClass: "mt-3 d-xl-block d-md-block d-none",
                                                        attrs: {
                                                            cols: "12",
                                                            xl: "6",
                                                        },
                                                    },
                                                    [
                                                        e(
                                                            "b-button",
                                                            {
                                                                staticClass: "float-right px-5 btn-subscribe",
                                                                on: {
                                                                    click: t.toggle,
                                                                },
                                                            },
                                                            [t._v(t._s(t.buttonMessage))]
                                                        ),
                                                    ],
                                                    1
                                                ),
                                                t._v(" "),
                                                e(
                                                    "b-col",
                                                    {
                                                        staticClass: "mt-3 d-block d-xl-none d-md-none",
                                                        attrs: {
                                                            cols: "9",
                                                            xl: "6",
                                                        },
                                                    },
                                                    [
                                                        e(
                                                            "b-button",
                                                            {
                                                                staticClass: "px-5 btn-subscribe",
                                                                on: {
                                                                    click: t.toggle,
                                                                },
                                                            },
                                                            [t._v(t._s(t.buttonMessage))]
                                                        ),
                                                    ],
                                                    1
                                                ),
                                            ],
                                            1
                                        ),
                                        t._v(" "),
                                        e(
                                            "b-row",
                                            {
                                                staticClass: "mt-4",
                                            },
                                            t._l(t.categories, function (t, o) {
                                                return e(
                                                    "b-col",
                                                    {
                                                        key: o,
                                                        staticClass: "mt-4",
                                                        attrs: {
                                                            xl: "6",
                                                            cols: "12",
                                                        },
                                                    },
                                                    [
                                                        e(
                                                            "NuxtLink",
                                                            {
                                                                attrs: {
                                                                    to: "/store/".concat(t.slug),
                                                                },
                                                            },
                                                            [
                                                                e(
                                                                    "div",
                                                                    {
                                                                        staticClass: "box-animate",
                                                                    },
                                                                    [
                                                                        e("b-img", {
                                                                            attrs: {
                                                                                src: "".concat(t.image),
                                                                                center: "",
                                                                                fluid: "",
                                                                                rounded: "10",
                                                                            },
                                                                        }),
                                                                    ],
                                                                    1
                                                                ),
                                                            ]
                                                        ),
                                                    ],
                                                    1
                                                );
                                            }),
                                            1
                                        ),
                                    ],
                                    1
                                ),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            e.default = component.exports;
        },
        402: function (t, e, o) {
            "use strict";
            o.r(e);
            var n = {
                    name: "CategoryPage",
                    components: {
                        Category: o(386).default,
                    },
                    data: function () {
                        return {};
                    },
                },
                l = o(40),
                component = Object(l.a)(
                    n,
                    function () {
                        var t = this._self._c;
                        return t("div", [t("Category")], 1);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            e.default = component.exports;
        },
    },
]);
