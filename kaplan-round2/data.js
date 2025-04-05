 const DynamicForm = [
    {
        "ID": "exam",
        "id": "7hlg1Tf7qrojCa0ZFrW1e5",
        "type": "radio",
        "depth": 0,
        "index": 4,
        "isLast": false,
        "parent": null,
        "options": [
            "CFA",
            "CAIA",
            "FRM"
        ],
        "children": [
            {
                "ID": "cfa",
                "type": "radio",
                "depth": 1,
                "index": 0,
                "isLast": false,
                "parent": null,
                "options": [
                    "Level I",
                    "Level II",
                    "Level III",
                    "Not Yet a CFA Candidate"
                ],
                "children": [
                    {
                        "ID": "cfa-level-1",
                        "type": "radio",
                        "depth": 2,
                        "index": 0,
                        "isLast": false,
                        "parent": null,
                        "options": [
                            "February 2025",
                            "May 2025",
                            "August 2025",
                            "November 2025",
                            "February 2026"
                        ],
                        "children": [],
                        "parentId": "3wdWK0MALjNcD644ZTRdkk",
                        "label_val": "Select Your CFA Level I Window",
                        "displayVertical": true
                    },
                    {
                        "ID": "cfa-level-II",
                        "id": "83o4BGLJHD79BfdSzuLHZ",
                        "type": "radio",
                        "depth": 2,
                        "index": 1,
                        "isLast": false,
                        "parent": null,
                        "options": [
                            "May 2025",
                            "August 2025",
                            "November 2025"
                        ],
                        "children": [],
                        "parentId": "3wdWK0MALjNcD644ZTRdkk",
                        "label_val": "Select Your CFA Level II Window"
                    },
                    {
                        "ID": "cfa-level-III",
                        "id": "MUm8UFbyG8d2A37XfvrC8",
                        "type": "radio",
                        "depth": 2,
                        "index": 2,
                        "isLast": true,
                        "parent": null,
                        "options": [
                            "February 2025",
                            "August 2025",
                            "February 2026"
                        ],
                        "children": [],
                        "parentId": "3wdWK0MALjNcD644ZTRdkk",
                        "label_val": "Select Your CFA Level III Window"
                    }
                ],
                "parentId": "7hlg1Tf7qrojCa0ZFrW1e5",
                "collapsed": true,
                "label_val": "Please Select Your CFA Exam Level",
                "isRequired": true
            },
            {
                "ID": "caia",
                "id": "7yiNWXZCFop53oP5WbCWDx",
                "type": "radio",
                "depth": 1,
                "index": 1,
                "isLast": false,
                "parent": null,
                "options": [
                    "Level I",
                    "Level II",
                    "Not Yet a CAIA Candidate"
                ],
                "children": [
                    {
                        "ID": "caia-level-I",
                        "id": "1TKUVVyvvAovo7yR4c5jRU",
                        "type": "radio",
                        "depth": 2,
                        "index": 0,
                        "isLast": false,
                        "parent": null,
                        "options": [
                            "March 2025",
                            "September 2025"
                        ],
                        "children": [],
                        "parentId": "7yiNWXZCFop53oP5WbCWDx",
                        "label_val": "Select Your CAIA Level I Window"
                    },
                    {
                        "ID": "caia-level-II",
                        "id": "XAniUr5gJsCpuJzzwXqw3",
                        "type": "radio",
                        "depth": 2,
                        "index": 1,
                        "isLast": true,
                        "parent": null,
                        "options": [
                            "March 2025",
                            "September 2025"
                        ],
                        "children": [],
                        "parentId": "7yiNWXZCFop53oP5WbCWDx",
                        "label_val": "Select Your CAIA Level II Window"
                    }
                ],
                "parentId": "7hlg1Tf7qrojCa0ZFrW1e5",
                "collapsed": true,
                "label_val": "Please Select Your CAIA Exam Level",
                "isRequired": true
            },
            {
                "ID": "frm",
                "id": "4OgVXZNCadXk6nW0dvFll7",
                "type": "radio",
                "depth": 1,
                "index": 2,
                "isLast": true,
                "parent": null,
                "options": [
                    "Part I",
                    "Part II",
                    "Not Yet an FRM Candidate"
                ],
                "children": [
                    {
                        "ID": "frm-part-I",
                        "id": "2xOLYzDtE4v0PPIEqNvzCx",
                        "type": "radio",
                        "depth": 2,
                        "index": 0,
                        "isLast": true,
                        "parent": null,
                        "options": [
                            "May 2025",
                            "August 2025",
                            "November 2025"
                        ],
                        "children": [],
                        "parentId": "4OgVXZNCadXk6nW0dvFll7",
                        "label_val": "Select Your FRM Part I Window"
                    },
                    {
                        "ID": "frm-part-II",
                        "id": "154vctx8kq2cBCj4ES20B3",
                        "type": "radio",
                        "depth": 2,
                        "index": 5,
                        "isLast": true,
                        "parent": null,
                        "options": [
                            "May 2025",
                            "August 2025",
                            "November 2025"
                        ],
                        "children": [],
                        "parentId": "4OgVXZNCadXk6nW0dvFll7",
                        "label_val": "Select Your FRM Part II Window"
                    }
                ],
                "parentId": "7hlg1Tf7qrojCa0ZFrW1e5",
                "collapsed": true,
                "label_val": "Please Select Your FRM Exam Part",
                "isRequired": true
            }
        ],
        "parentId": null,
        "collapsed": false,
        "label_val": "Which Exam Are You Interested In?",
        "isRequired": true
    }
]

export default DynamicForm