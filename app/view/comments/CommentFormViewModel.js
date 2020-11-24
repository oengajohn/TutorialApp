Ext.define('TutorialApp.view.comments.CommentFormViewModel',{
    extend:'Ext.app.ViewModel',
    alias:'viewmodel.commentformviewmodel',
    data:{
        title:null,
        postId:null,
        firstName:null,
        lastName:null
    },
    formulas: {
        // We'll explain formulas in more detail soon.
        name: function (get) {
            var fn = get('firstName'), ln = get('lastName');
            return (fn && ln) ? (fn + ' ' + ln) : (fn || ln || '');
        },
        // We'll explain formulas in more detail soon.
        name1: function (get) {
            var fn = get('firstName'), ln = get('lastName');
            return (fn && ln) ? (fn + ' ' + ln) : (fn || ln || '');
        },
        // We'll explain formulas in more detail soon.
        name2: function (get) {
            var fn = get('firstName'), ln = get('lastName');
            return (fn && ln) ? (fn + ' ' + ln) : (fn || ln || '');
        },
        // We'll explain formulas in more detail soon.
        name3: function (get) {
            var fn = get('firstName'), ln = get('lastName');
            return (fn && ln) ? (fn + ' ' + ln) : (fn || ln || '');
        },
        // We'll explain formulas in more detail soon.
        name4: function (get) {
            var fn = get('firstName'), ln = get('lastName');
            return (fn && ln) ? (fn + ' ' + ln) : (fn || ln || '');
        },
        // We'll explain formulas in more detail soon.
        name5: function (get) {
            var fn = get('firstName'), ln = get('lastName');
            return (fn && ln) ? (fn + ' ' + ln) : (fn || ln || '');
        }

    }
});