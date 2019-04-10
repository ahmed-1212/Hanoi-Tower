
    var app = new Vue({
        'el': '#app',
        'data': {
            moves: 30, //Player Moves
            finishingMove: 0
        }
    })

    $(function () {
        'use strict';

        $('.tower .disk').click(function () {

            var towerNum = prompt('Enter The Tower Number?'), //Value That Will Be Enter To The Prompt Window
                bottomPosition = $(this).css('bottom'); //Original Disk Position From Bottom

            // To Not But Any Numbers Les Than 0 Or Equal To 0
            if (towerNum != 1 && towerNum != 2 && towerNum != 3) {
                alert('please Enter one of the tower that is available :)')
            }
            // This And The One After It To Not Move More Than 2 Steps
            else if ($(this).parent('.tower1').css('display') === 'block' && towerNum == 3) {
                alert('One Tower Per Move')
            }
            else if ($(this).parent('.tower3').css('display') === 'block' && towerNum == 1) {
                alert('One Tower Per Move')
            }
            // This And The Tow After It To Not Choose The Same Tower
            else if ($(this).parent('.tower1').css('display') === 'block' && towerNum == 1 ) {
                alert('Cant Choose The Same Tower')
            }
            else if ($(this).parent('.tower2').css('display') === 'block' && towerNum == 2 ) {
                alert('Cant Choose The Same Tower')
            }
            else if ($(this).parent('.tower3').css('display') === 'block' && towerNum == 3 ) {
                alert('Cant Choose The Same Tower')
            }
            //This One Is To Make The Player Choose The Disk On Top
            else if ($(this).width() > $(this).siblings(':visible').width()) {
                alert('Choose The One On Top')
            }
            //This One TO Stop The Player From Butting A Big Disk On A Small Disk
            else if ($(this).width() > $(this).parent('.tower').siblings('.tower' + towerNum).children(':visible').width()) {
                alert('Cant But A Big Disk On Top A Small Disk')
            }
            //This One To Make The Disks Move With Other Rules
            else {
                $(this).animate({bottom: '186px'}, 300, function () {
                    $(this).hide().css('bottom', bottomPosition).parent('.tower').siblings('.tower' + towerNum).children('.' + $(this).data('disk')).show();
                    
                    app.finishingMove ++;
                    app.moves --; //Decreeing The Moves On Every Disk Move
                    
                    //All This To Position The Small Disk Right
                    if ($('.tower1').children('.small').css('display') === 'block' && $('.tower1').children('.large').css('display') === 'block' && $('.tower1').children('.medium').css('display') === 'none'  ) {
                        $('.small').css('bottom', '42px')
                    }
                    else if ($('.tower2').children('.small').css('display') === 'block' && $('.tower2').children('.large').css('display') === 'block' && $('.tower2').children('.medium').css('display') === 'none'  ) {
                        $('.small').css('bottom', '42px')
                    }
                    else if ($('.tower3').children('.small').css('display') === 'block' && $('.tower3').children('.large').css('display') === 'block' && $('.tower3').children('.medium').css('display') === 'none'  ) {
                        $('.small').css('bottom', '42px')
                    }
                    //To Show The Finishing Messages
                    else if ($('.tower3').children('.small').css('display') === 'block' && $('.tower3').children('.medium').css('display') === 'block' && $('.tower3').children('.large').css('display') === 'block' ) {
                        $('.hanoi').fadeIn();    
                    }
                    else if (app.moves === 0) {
                        $('.hanoi-lost').fadeIn();    
                    }   
                    else {
                        $('.small').css('bottom', '74px')
                    } 
                })
            }
        });

        //To Hide The Wining Message and The Disks
        $('.hanoi button').click(function () {
            $('.hanoi').fadeOut();
            $('.tower .disk').hide();
        });

        //To Hide The Lost Message and The Disks
        $('.hanoi-lost button').click(function () {
            $('.hanoi-lost').fadeOut();
            $('.tower .disk').hide();
        });
       
    });

    

