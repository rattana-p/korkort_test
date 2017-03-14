	
			var my_questions_se;
			var my_questions_th;
			var total_answer = [];
			var total_answer_th = [];
			var correct = 0;
			var correct_th = 0;
			var choices_th;
			var choices;
			$(document).ready(function () {
				if ($(window).width() < 555) {
					$('.your_info').addClass("hide");
				}
				else {
					$('.your_info').removeClass("hide");
				}
				// ===========>  SWEDISH VERSION <===========   
				function se_quiz(showmenu) {
					var x = 1;
					var pos = 0
						, test, test_status, quiz_pic, question, choice, choices, chA, chB, chC, chD, correct = 0;
					var questions_se = {
						"menu1": [
                          ["http://rattana.se/korkort_test/sign_test/menu_1/q_01.png", "Questions_01", "Answer A", "Answer B", "Answer C", "Answer D", "D", "this is the correct answer av question_01"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_02.png", "Questions_02", "Answer A", "Answer B", "Answer C", "Answer D", "D", "this is the correct answer av question_02"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_03.png", "Questions_03", "Answer A", "Answer B", "Answer C", "Answer D", "D", "this is the correct answer av question_03"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_04.png", "Questions_04", "Answer A", "Answer B", "Answer C", "Answer D", "D", "this is the correct answer av question_04"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_05.png", "Questions_05", "Answer A", "Answer B", "Answer C", "Answer D", "D", "this is the correct answer av question_05"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_06.png", "Questions_06", "Answer A", "Answer B", "Answer C", "Answer D", "D", "this is the correct answer av question_06"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_07.png", "Questions_07", "Answer A", "Answer B", "Answer C", "Answer D", "D", "this is the correct answer av question_07"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_08.png", "Questions_08", "Answer A", "Answer B", "Answer C", "Answer D", "D", "this is the correct answer av question_08"]
	    				, ["http://rattana.se/korkort_test/sign_test/menu_1/q_09.png", "Questions_09", "Answer A", "Answer B", "Answer C", "Answer D", "D", "this is the correct answer av question_09"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_10.png", "Questions_10", "Answer A", "Answer B", "Answer C", "Answer D", "D", "this is the correct answer av question_10"]
						, ["http://rattana.se/korkort_test/sign_test/menu_1/q_11.png", "Questions_11", "Answer A", "Answer B", "Answer C", "Answer D", "D", "this is the correct answer av question_11"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_12.png", "Questions_12", "Answer A", "Answer B", "Answer C", "Answer D", "D", "this is the correct answer av question_12"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_13.png", "Questions_13", "Answer A", "Answer B", "Answer C", "Answer D", "D", "this is the correct answer av question_13"]
	    				, ["http://rattana.se/korkort_test/sign_test/menu_1/q_14.png", "Questions_14", "Answer A", "Answer B", "Answer C", "Answer D", "D", "this is the correct answer av question_14"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_15.png", "Questions_15", "Answer A", "Answer B", "Answer C", "Answer D", "D", "this is the correct answer av question_15"]
                       ]
						, "menu2": [
                          ["http://rattana.se/korkort_test/sign_test/menu_2/q_01.png", "Questions_01", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_01"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_2/q_02.png", "Questions_02", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_02"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_2/q_03.png", "Questions_03", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_03"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_2/q_04.png", "Questions_04", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_04"]
						, ["http://rattana.se/korkort_test/sign_test/menu_2/q_05.png", "Questions_05", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_05"]
                       ]
						, "menu3": [
                          ["http://rattana.se/korkort_test/sign_test/menu_3/q_01.png", "Questions_01", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_01"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_3/q_02.png", "Questions_02", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_02"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_3/q_03.png", "Questions_03", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_03"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_3/q_04.png", "Questions_04", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_04"]
						, ["http://rattana.se/korkort_test/sign_test/menu_3/q_05.png", "Questions_05", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_05"]
						, ["http://rattana.se/korkort_test/sign_test/menu_3/q_06.png", "Questions_06", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_06"]
						, ["http://rattana.se/korkort_test/sign_test/menu_3/q_07.png", "Questions_07", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_07"]
                       ]
						, "menu4": [
                          ["http://rattana.se/korkort_test/sign_test/menu_4/q_01.png", "Questions_01", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_01"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_4/q_02.png", "Questions_02", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_02"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_4/q_03.png", "Questions_03", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_03"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_4/q_04.png", "Questions_04", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_04"]
						, ["http://rattana.se/korkort_test/sign_test/menu_4/q_05.png", "Questions_05", "Answer A", "Answer B", "Answer C", "Answer D", "A", "this is the correct answer av question_05"]
                       ]
					};
					var questions_th = {
						"menu1": [
	   					  ["http://rattana.se/korkort_test/sign_test/menu_1/q_01.png", "คำถามที่_01", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "D", "คำตอบที่ถูกต้องของคำถามที่_01 คือ คำอธิบายรายละเอียด"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_02.png", "คำถามที่_02", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "D", "คำตอบที่ถูกต้องของคำถามที่_02 คือ คำอธิบายรายละเอียด"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_03.png", "คำถามที่_03", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "D", "คำตอบที่ถูกต้องของคำถามที่_03 คือ คำอธิบายรายละเอียด"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_04.png", "คำถามที่_04", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "D", "คำตอบที่ถูกต้องของคำถามที่_04 คือ คำอธิบายรายละเอียด"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_05.png", "คำถามที่_05", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "D", "คำตอบที่ถูกต้องของคำถามที่_05 คือ คำอธิบายรายละเอียด"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_06.png", "คำถามที่_06", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "D", "คำตอบที่ถูกต้องของคำถามที่_06 คือ คำอธิบายรายละเอียด"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_07.png", "คำถามที่_07", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "D", "คำตอบที่ถูกต้องของคำถามที่_07 คือ คำอธิบายรายละเอียด"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_08.png", "คำถามที่_08", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "D", "คำตอบที่ถูกต้องของคำถามที่_08 คือ คำอธิบายรายละเอียด"]
	    				, ["http://rattana.se/korkort_test/sign_test/menu_1/q_09.png", "คำถามที่_09", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "D", "คำตอบที่ถูกต้องของคำถามที่_09 คือ คำอธิบายรายละเอียด"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_10.png", "คำถามที่_10", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "D", "คำตอบที่ถูกต้องของคำถามที่_10 คือ คำอธิบายรายละเอียด"]
						, ["http://rattana.se/korkort_test/sign_test/menu_1/q_11.png", "คำถามที่_11", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "D", "คำตอบที่ถูกต้องของคำถามที่_11 คือ คำอธิบายรายละเอียด"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_12.png", "คำถามที่_12", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "D", "คำตอบที่ถูกต้องของคำถามที่_12 คือ คำอธิบายรายละเอียด"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_1/q_13.png", "คำถามที่_13", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "D", "คำตอบที่ถูกต้องของคำถามที่_13 คือ คำอธิบายรายละเอียด"]
	    				, ["http://rattana.se/korkort_test/sign_test/menu_1/q_14.png", "คำถามที่_14", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "D", "คำตอบที่ถูกต้องของคำถามที่_14 คือ คำอธิบายรายละเอียด"]
                          ["http://rattana.se/korkort_test/sign_test/menu_1/q_15.png", "คำถามที่_15", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "D", "คำตอบที่ถูกต้องของคำถามที่_15 คือ คำอธิบายรายละเอียด"]	
                       ]
						, "menu2": [
                          ["http://rattana.se/korkort_test/sign_test/menu_2/q_01.png", "คำถามที่_01", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_01 คือ คำอธิบายรายละเอียด"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_2/q_02.png", "คำถามที่_02", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_02 คือ คำอธิบายรายละเอียด"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_2/q_03.png", "คำถามที่_03", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_03 คือ คำอธิบายรายละเอียด"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_2/q_04.png", "คำถามที่_04", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_04 คือ คำอธิบายรายละเอียด"]
						, ["http://rattana.se/korkort_test/sign_test/menu_2/q_05.png", "คำถามที่_05", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_05 คือ คำอธิบายรายละเอียด"]
                       ]
						, "menu3": [
                          ["http://rattana.se/korkort_test/sign_test/menu_3/q_01.png", "คำถามที่_01", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_01 คือ คำอธิบายรายละเอียด"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_3/q_02.png", "คำถามที่_02", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_02 คือ คำอธิบายรายละเอียด"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_3/q_03.png", "คำถามที่_03", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_03 คือ คำอธิบายรายละเอียด"]
                        , ["http://rattana.se/korkort_test/sign_test/menu_3/q_04.png", "คำถามที่_04", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_04 คือ คำอธิบายรายละเอียด"]
						, ["http://rattana.se/korkort_test/sign_test/menu_3/q_05.png", "คำถามที่_05", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_05 คือ คำอธิบายรายละเอียด"]
						, ["http://rattana.se/korkort_test/sign_test/menu_3/q_06.png", "คำถามที่_06", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_06 คือ คำอธิบายรายละเอียด"]
						, ["http://rattana.se/korkort_test/sign_test/menu_3/q_07.png", "คำถามที่_07", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_07 คือ คำอธิบายรายละเอียด"]
                       ]
						, "menu4": [
                          ["http://rattana.se/korkort_test/sign_test/menu_4/q_01.png", "คำถามที่_01", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_01 คือ คำอธิบายรายละเอียด"], ["http://rattana.se/korkort_test/sign_test/menu_4/q_02.png", "คำถามที่_02", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_02 คือ คำอธิบายรายละเอียด"], ["http://rattana.se/korkort_test/sign_test/menu_4/q_03.png", "คำถามที่_03", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_03 คือ คำอธิบายรายละเอียด"], ["http://rattana.se/korkort_test/sign_test/menu_4/q_04.png", "คำถามที่_04", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_04 คือ คำอธิบายรายละเอียด"], ["http://rattana.se/korkort_test/sign_test/menu_4/q_05.png", "คำถามที่_05", "คำตอบ ข้อแรก", "คำตอบ ข้อสอง", "คำตอบ ข้อสาม", "คำตอบ ข้อสี่", "A", "คือคำตอบที่ถูกต้องของคำถามที่_05 คือ คำอธิบายรายละเอียด"]]
					};
					// check menu				
					if ((showmenu == 0) && (se == true)) {
						menuselect = showmenu;
						my_questions_se = questions_se.menu1;
						if (se == true) {
							for (var i = 1; i <= my_questions_se.length; i++) {
								_("test_status").innerHTML += "<span class='show_total_quiz'>" + i + "</span>";
							};
						};
					}
					if ((showmenu == 1) && (se == true)) {
						menuselect = showmenu;
						my_questions_se = questions_se.menu2;
						if (se == true) {
							for (var i = 1; i <= my_questions_se.length; i++) {
								_("test_status").innerHTML += "<span class='show_total_quiz'>" + i + "</span>";
							};
						};
					}
					if ((showmenu == 2) && (se == true)) {
						menuselect = showmenu;
						my_questions_se = questions_se.menu3;
						if (se == true) {
							for (var i = 1; i <= my_questions_se.length; i++) {
								_("test_status").innerHTML += "<span class='show_total_quiz'>" + i + "</span>";
							};
						};
					}
					if ((showmenu == 3) && (se == true)) {
						menuselect = showmenu;
						my_questions_se = questions_se.menu4;
						if (se == true) {
							for (var i = 1; i <= my_questions_se.length; i++) {
								_("test_status").innerHTML += "<span class='show_total_quiz'>" + i + "</span>";
							};
						};
					}
					if ((showmenu == 0) && (th == true)) {
						menuselect = showmenu;
						my_questions_th = questions_th.menu1;
						if (th == true) {
							for (var j = 1; j <= my_questions_th.length; j++) {
								_("test_status").innerHTML += "<span class='show_total_quiz'>" + j + "</span>";
							};
						};
					}
					if ((showmenu == 1) && (th == true)) {
						menuselect = showmenu;
						my_questions_th = questions_th.menu2;
						if (th == true) {
							for (var j = 1; j <= my_questions_th.length; j++) {
								_("test_status").innerHTML += "<span class='show_total_quiz'>" + j + "</span>";
							};
						};
					}
					if ((showmenu == 2) && (th == true)) {
						menuselect = showmenu;
						my_questions_th = questions_th.menu3;
						if (th == true) {
							for (var j = 1; j <= my_questions_th.length; j++) {
								_("test_status").innerHTML += "<span class='show_total_quiz'>" + j + "</span>";
							};
						};
					}
					if ((showmenu == 3) && (th == true)) {
						menuselect = showmenu;
						my_questions_th = questions_th.menu4;
						if (th == true) {
							for (var j = 1; j <= my_questions_th.length; j++) {
								_("test_status").innerHTML += "<span class='show_total_quiz'>" + j + "</span>";
							};
						};
					}
					$('.next').click(function () {
						checkAnswer();
					});

					function _(x) {
						return document.getElementById(x);
					};
					renderQuestion();

					function renderQuestion() {
						test = _("test");
						if ((se == true) && (pos >= my_questions_se.length)) {
							var total_se = my_questions_se.length;
							var showpercent_se = (correct / total_se) * 100;
							var totolshowpercent_se = showpercent_se.toFixed(0);
							if (correct > 0) {
								if ((se == true) && (menuselect == 0) && (scorefromdatabase < correct + " poäng")) {
									var carscoredatabase = firebase.database().ref().child('signscore');
									carscoredatabase.set(correct);
									alert("!! Nytt rekord för vägmärken är " + correct);
								}
								if ((se == true) && (menuselect == 1) && (scorefromdatabase < correct + " poäng")) {
									var carscoredatabase = firebase.database().ref().child('saftyscore');
									carscoredatabase.set(correct);
									alert("!! Nytt rekord för säkerhet är " + correct + " poäng");
								}
								if ((se == true) && (menuselect == 2) && (scorefromdatabase < correct)) {
									var carscoredatabase = firebase.database().ref().child('environmentscore');
									carscoredatabase.set(correct);
									alert("!! Nytt rekord för miljö och hälsa är " + correct + " poäng");
								}
								if ((se == true) && (menuselect == 3) && (scorefromdatabase < correct)) {
									var carscoredatabase = firebase.database().ref().child('carscore');
									carscoredatabase.set(correct);
									alert("!! Nytt rekord för fordon är " + correct + " poäng");
								}
								test.innerHTML = "<h2> You got " + correct + " of " + my_questions_se.length + " questions correct</h2><br>";
								test.innerHTML += "<div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='" + totolshowpercent_se + "' aria-valuemin='0' aria-valuemax='100' style='width:" + totolshowpercent_se + "%'> " + totolshowpercent_se + "% </div> </div>";
								for (var i = 1; i <= my_questions_se.length; i++) {
									var j = 1;
									var correctanswer = my_questions_se[i - j][7];
									test.innerHTML += "<h5 class='showtheanswer'> Question " + i + ": " + total_answer[i - j] + "</h5><h6> Correct answer : " + correctanswer + "</h6><br>";
								};
								pos = 0;
								correct = 0;
								return false;
							}
							else {
								test.innerHTML = "<h2> You got " + correct + " of " + my_questions_se.length + " questions correct</h2><br>";
								test.innerHTML += "<div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='" + totolshowpercent_se + "' aria-valuemin='0' aria-valuemax='100' style='width:" + totolshowpercent_se + "%'> " + totolshowpercent_se + "% </div> </div>";
								for (var i = 1; i <= my_questions_se.length; i++) {
									var j = 1;
									var correctanswer = my_questions_se[i - j][7];
									test.innerHTML += "<h5 class='showtheanswer'> Question " + i + ": " + total_answer[i - j] + "</h5><h6> Correct answer : " + correctanswer + "</h6><br>";
								};
								pos = 0;
								correct = 0;
								return false;
							}
						}
						if ((th == true) && (pos >= my_questions_th.length)) {
							var total_th = my_questions_th.length;
							var showpercent_th = (correct_th / total_th) * 100;
							var totolshowpercent_th = showpercent_th.toFixed(0);
							if (correct_th > 0) {
								if ((th == true) && (menuselect == 0) && (scorefromdatabase < correct_th + " poäng")) {
									var carscoredatabase = firebase.database().ref().child('signscore');
									carscoredatabase.set(correct_th);
									alert("!! Nytt rekord för vägmärken är " + correct_th);
								}
								if ((th == true) && (menuselect == 1) && (scorefromdatabase < correct_th + " poäng")) {
									var carscoredatabase = firebase.database().ref().child('saftyscore');
									carscoredatabase.set(correct_th);
									alert("!! Nytt rekord för säkerhet är " + correct_th + " poäng");
								}
								if ((th == true) && (menuselect == 2) && (scorefromdatabase < correct_th)) {
									var carscoredatabase = firebase.database().ref().child('environmentscore');
									carscoredatabase.set(correct_th);
									alert("!! Nytt rekord för miljö och hälsa är " + correct_th + " poäng");
								}
								if ((th == true) && (menuselect == 3) && (scorefromdatabase < correct_th)) {
									var carscoredatabase = firebase.database().ref().child('carscore');
									carscoredatabase.set(correct_th);
									alert("!! Nytt rekord för fordon är " + correct_th + " poäng");
								}
								test.innerHTML = "<h2> You got " + correct_th + " of " + my_questions_th.length + " questions correct</h2><br>";
								test.innerHTML += "<div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='" + totolshowpercent_th + "' aria-valuemin='0' aria-valuemax='100' style='width:" + totolshowpercent_th + "%'> " + totolshowpercent_th + "% </div> </div>";
								for (var i = 1; i <= my_questions_th.length; i++) {
									var j = 1;
									var correctanswer_th = my_questions_th[i - j][7];
									test.innerHTML += "<h5 class='showtheanswer'> Question " + i + ": " + total_answer_th[i - j] + "</h5><h6> Correct answer : " + correctanswer_th + "</h6><br>";
								};
								pos = 0;
								correct = 0;
								return false;
							}
							else {
								test.innerHTML = "<h2> You got " + correct_th + " of " + my_questions_th.length + " questions correct</h2><br>";
								test.innerHTML += "<div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='" + totolshowpercent_th + "' aria-valuemin='0' aria-valuemax='100' style='width:" + totolshowpercent_th + "%'> " + totolshowpercent_th + "% </div> </div>";
								for (var i = 1; i <= my_questions_th.length; i++) {
									var j = 1;
									var correctanswer_th = my_questions_th[i - j][7];
									test.innerHTML += "<h5 class='showtheanswer'> Question " + i + ": " + total_answer_th[i - j] + "</h5><h6> Correct answer : " + correctanswer_th + "</h6><br>";
								};
								pos = 0;
								correct = 0;
								return false;
							}
						};
						if (se == true) {
							var quiz_pic = my_questions_se[pos][0];
							var question = my_questions_se[pos][1];
							var chA = my_questions_se[pos][2];
							var chB = my_questions_se[pos][3];
							var chC = my_questions_se[pos][4];
							var chD = my_questions_se[pos][5];
							test.innerHTML = "<div class='question_pics'><img class='img-fluid q_pics' src='" + quiz_pic + "'></div><br>";
							test.innerHTML += "<div class='quiz'><div class='question_text'>" + question + "</div><br></div>";
							test.innerHTML += "<div class='answergroup'><input type='radio' class='answer_choice' name='choices' value='A'/>" + chA + "<br>" + "<input type='radio' class='answer_choice' name='choices' value='B'/>" + chB + "<br>" + "<input type='radio' class='answer_choice' name='choices' value='C'/>" + chC + "<br>" + "<input type='radio' class='answer_choice' name='choices' value='D'/>" + chD + "<br></div>";
						}
						if (th == true) {
							var quiz_pic_th = my_questions_th[pos][0];
							var question_th = my_questions_th[pos][1];
							var chA_th = my_questions_th[pos][2];
							var chB_th = my_questions_th[pos][3];
							var chC_th = my_questions_th[pos][4];
							var chD_th = my_questions_th[pos][5];
							test.innerHTML = "<div class='question_pics'><img class='img-fluid q_pics' src='" + quiz_pic_th + "'></div><br>";
							test.innerHTML += "<div class='quiz'><div class='question_text'>" + question_th + "</div><br></div>";
							test.innerHTML += "<div class='answergroup'><input type='radio' class='answer_choice' name='choices_th' value='A'/>" + chA_th + "<br>" + "<input type='radio' class='answer_choice' name='choices_th' value='B'/>" + chB_th + "<br>" + "<input type='radio' class='answer_choice' name='choices_th' value='C'/>" + chC_th + "<br>" + "<input type='radio' class='answer_choice' name='choices_th' value='D'/>" + chD_th + "<br></div>";
						};
					};

					function checkAnswer() {
						$('.show_total_quiz:nth-child(' + x + ')').addClass("done");
						x++;
						choices = document.getElementsByName("choices");
						choices_th = document.getElementsByName("choices_th");
						if (se == true) {
							for (var i = 0; i < choices.length; i++) {
								if (choices[i].checked) {
									choices = choices[i].value;
									if (choices == my_questions_se[pos][6]) {
										correct++;
										total_answer.push("rätt svar");
									}
									if (choices != my_questions_se[pos][6]) {
										total_answer.push("fel svar");
									}
								}
							}
						}
						if (th == true) {
							for (var i = 0; i < choices_th.length; i++) {
								if (choices_th[i].checked) {
									choices_th = choices_th[i].value;
									if (choices_th == my_questions_th[pos][6]) {
										correct_th++;
										total_answer_th.push("rätt svar");
									}
									if (choices_th != my_questions_th[pos][6]) {
										total_answer_th.push("fel svar");
									}
								}
							}
						}
						pos++;
						renderQuestion();
					};
					window.addEventListener("load", renderQuestion, false);
				};
				// FUNCTION TO CHECK LANGUAGE 
				var se = true;
				var th;
				$('#icon_box').one("click", show);

				function show() {
					$('#line_2').addClass("effect_line2");
					$('#line_1').addClass("effect_line1");
					$('#line_3').addClass("effect_line3");
					$('#left').toggleClass("float_left");
					$('#right').toggleClass("float_right");
					$('ul, .your_info').toggleClass("hide");
					$('.phone , .your_info').effect('slide', {
						direction: 'right'
						, distance: "-1800"
					}, 900);
					$('.question_containner').toggleClass("hide");
					$('.question_status_row').addClass("hide");
					$(this).one("click", hide);
				};

				function hide() {
					$('#line_2').removeClass("effect_line2");
					$('#line_1').removeClass("effect_line1");
					$('#line_3').removeClass("effect_line3");
					$('#left').toggleClass("float_left");
					$('#right').toggleClass("float_right");
					$('ul, .your_info').toggleClass("hide");
					$('.phone , .your_info').effect('slide', {
						direction: 'right'
						, distance: "-1800"
					}, 900);
					$('.question_containner').toggleClass("hide");
					$('.question_status_row').removeClass("hide");
					$(this).one("click", show);
				};
				$('#login').click(function () {
					$('#login_popup').toggleClass("hide");
					$('#login_popup').effect('slide', {
						direction: 'down'
						, distance: "-800"
					}, 800);
					$('#login').css({
						"opacity": "0"
					});
					$('footer').css({
						"display": "none"
					});
				});
				$('.closeicon').click(function () {
					$('#login_popup').toggleClass("hide");
					$('#inputemail').removeClass("showerror");
					$('#inputpassword').removeClass("showerror");
					$('#inputemail').addClass("hideerror");
					$('#inputpassword').addClass("hideerror");
					$('.errortext').html("");
					$('.errortext').removeClass("show");
					$('.errortext').addClass("hide");
					$('#login').css({
						"opacity": "1"
					});
					$('footer').css({
						"display": "block"
					});
				});
				// =========> MENU CLICK FUNCTION
				$('.desktop:first-child, .phone:first-child').click(function () {
					correct = 0;
					correct_th = 0;
					total_answer = [];
					total_answer_th = [];
					$('.show_total_quiz').remove();
					$(this).removeClass('desktop unselect').addClass('desktop selected');
					$('.desktop:nth-child(2), .desktop:nth-child(3), .desktop:nth-child(4)').removeClass('desktop selected').addClass('desktop unselect');
					$('.phone:nth-child(2), .phone:nth-child(3), .phone:nth-child(4)').removeClass('phone selected').addClass('phone unselect');
					var showmenu = $(this).val();
					se_quiz(showmenu);
					$("#se").click(function () {
						se = true;
						th = false;
						total_answer = [];
						total_answer_th = [];
						$('.show_total_quiz').remove();
						se_quiz(showmenu);
					});
					$("#th").click(function () {
						th = true;
						se = false;
						total_answer = [];
						total_answer_th = [];
						$('.show_total_quiz').remove();
						se_quiz(showmenu);
					});
					showscore(); // show score from database
					show_timer(10, 10); // count down timer 
				});
				$('.desktop:nth-child(2), .phone:nth-child(2)').click(function () {
					correct = 0;
					correct_th = 0;
					total_answer = [];
					total_answer_th = [];
					$('.show_total_quiz').remove();
					$(this).removeClass('desktop unselect').addClass('desktop selected');
					$('.desktop:first-child, .desktop:nth-child(3), .desktop:nth-child(4').removeClass('desktop selected').addClass('desktop unselect');
					$('.phone:first-child, .phone:nth-child(3), .phone:nth-child(4').removeClass('phone selected').addClass('phone unselect');
					var showmenu = $(this).val();
					se_quiz(showmenu);
					$("#se").click(function () {
						se = true;
						th = false;
						total_answer = [];
						total_answer_th = [];
						$('.show_total_quiz').remove();
						se_quiz(showmenu);
					});
					$("#th").click(function () {
						th = true;
						se = false;
						total_answer = [];
						total_answer_th = [];
						$('.show_total_quiz').remove();
						se_quiz(showmenu);
					});
					showscore(); // show score from database
					show_timer(10, 10); // count down timer 
				});
				$('.desktop:nth-child(3), .phone:nth-child(3)').click(function () {
					correct = 0;
					correct_th = 0;
					total_answer = [];
					total_answer_th = [];
					$('.show_total_quiz').remove();
					$(this).removeClass('desktop unselect').addClass('desktop selected');
					$('.desktop:first-child, .desktop:nth-child(2), .desktop:nth-child(4)').removeClass('desktop selected').addClass('desktop unselect');
					$('.phone:first-child, .phone:nth-child(2), .phone:nth-child(4)').removeClass('phone selected').addClass('phone unselect');
					var showmenu = $(this).val();
					se_quiz(showmenu);
					$("#se").click(function () {
						se = true;
						th = false;
						total_answer = [];
						total_answer_th = [];
						$('.show_total_quiz').remove();
						se_quiz(showmenu);
					});
					$("#th").click(function () {
						th = true;
						se = false;
						total_answer = [];
						total_answer_th = [];
						$('.show_total_quiz').remove();
						se_quiz(showmenu);
					});
					showscore(); // show score from database
					show_timer(10, 10); // count down timer 
				});
				$('.desktop:nth-child(4), .phone:nth-child(4)').click(function () {
					correct = 0;
					correct_th = 0;
					total_answer = [];
					total_answer_th = [];
					$('.show_total_quiz').remove();
					$(this).removeClass('desktop unselect').addClass('desktop selected');
					$('.desktop:first-child, .desktop:nth-child(2), .desktop:nth-child(3)').removeClass('desktop selected').addClass('desktop unselect');
					$('.phone:first-child, .phone:nth-child(2), .phone:nth-child(3)').removeClass('phone selected').addClass('phone unselect');
					var showmenu = $(this).val();
					se_quiz(showmenu);
					$("#se").click(function () {
						se = true;
						th = false;
						total_answer = [];
						total_answer_th = [];
						$('.show_total_quiz').remove();
						se_quiz(showmenu);
					});
					$("#th").click(function () {
						th = true;
						se = false;
						total_answer = [];
						total_answer_th = [];
						$('.show_total_quiz').remove();
						se_quiz(showmenu);
					});
					showscore(); // show score from database
					show_timer(10, 10); // count down timer 
				});
				$('#checkscore').click(function () {
					checkanswer();
				});
			});
			// connect to firebase
			// Initialize Firebase
			var scorefromdatabase;
			var config = {
				apiKey: "AIzaSyA2FkSCghkpGWq8S36Wyb_fOwWD7gjiPtg"
				, authDomain: "driver-license-test.firebaseapp.com"
				, databaseURL: "https://driver-license-test.firebaseio.com"
				, storageBucket: "driver-license-test.appspot.com"
				, messagingSenderId: "730521722420"
			};
			firebase.initializeApp(config);
			// SHOW SCORE FROM DATABASE 
			function showscore() {
				const score = document.getElementById("score");
				if (menuselect == 0) {
					const dbOB = firebase.database().ref().child('signscore');
					dbOB.on('value', snap => {
						scorefromdatabase = JSON.stringify(snap.val());
						score.innerHTML = scorefromdatabase;
						$('#score').css({
							"padding": "4px"
							, "height": "30px"
						});
					});
				};
				if (menuselect == 1) {
					const dbOB = firebase.database().ref().child('saftyscore');
					dbOB.on('value', snap => {
						scorefromdatabase = JSON.stringify(snap.val());
						score.innerHTML = scorefromdatabase;
						$('#score').css({
							"padding": "4px"
							, "height": "30px"
						});
					})
				};
				if (menuselect == 2) {
					const dbOB = firebase.database().ref().child('environmentscore');
					dbOB.on('value', snap => {
						scorefromdatabase = JSON.stringify(snap.val());
						score.innerHTML = scorefromdatabase;
						$('#score').css({
							"padding": "4px"
							, "height": "30px"
						});
					})
				};
				if (menuselect == 3) {
					const dbOB = firebase.database().ref().child('carscore');
					dbOB.on('value', snap => {
						scorefromdatabase = JSON.stringify(snap.val());
						score.innerHTML = scorefromdatabase;
						$('#score').css({
							"padding": "4px"
							, "height": "30px"
						});
					})
				};
			}
			// GET DATA ELEMENT FROM WEB 
			var input_email = document.getElementById("inputemail");
			var input_password = document.getElementById("inputpassword");
			var log_in = document.getElementById("loginsubmit");
			var sign_up = document.getElementById("signinsubmit");
			var sign_out = document.getElementById("signout");
			var forgetpassword = document.getElementById("forgotpassword");
			// SIGN IN fuction 
			log_in.addEventListener('click', e => {
				var email = input_email.value;
				var password = input_password.value;
				var auth = firebase.auth();
				// sign in
				var promise = auth.signInWithEmailAndPassword(email, password);
				//promise.catch( e => console.log(e.message) );
				promise.then(function (value) {
					console.log(value);
					$('#inputemail').removeClass("showerror");
					$('#inputpassword').removeClass("showerror");
					$('#inputemail').addClass("hideerror");
					$('#inputpassword').addClass("hideerror");
					$('.errortext').html("");
					$('.errortext').removeClass("show");
					$('.errortext').addClass("hide");
				}).catch(function (error) {
					console.log(error);
					$('#inputemail').removeClass("hideerror");
					$('#inputpassword').removeClass("hideerror");
					$('#inputemail').addClass("showerror");
					$('#inputpassword').addClass("showerror");
					$('.errortext').html("check your username and password.");
					$('.errortext').removeClass("hide");
					$('.errortext').addClass("show");
				});
			});
			// SIGN UP FUNCTION  
			sign_up.addEventListener('click', e => {
				var email = input_email.value;
				var password = input_password.value;
				var auth = firebase.auth();
				// sign up
				var promise = auth.createUserWithEmailAndPassword(email, password);
				//promise.catch( e => console.log(e.message) );  
				promise.then(function (value) {
					console.log(value);
					$('#inputemail').removeClass("showerror");
					$('#inputpassword').removeClass("showerror");
					$('#inputemail').addClass("hideerror");
					$('#inputpassword').addClass("hideerror");
					$('.errortext').html("");
					$('.errortext').removeClass("show");
					$('.errortext').addClass("hide");
				}).catch(function (error) {
					console.log(error.message);
					$('#inputemail').removeClass("hideerror");
					$('#inputpassword').removeClass("hideerror");
					$('#inputemail').addClass("showerror");
					$('#inputpassword').addClass("showerror");
					$('.errortext').html(error.message);
					$('.errortext').removeClass("hide");
					$('.errortext').addClass("show");
				});
			});
			// THIS FUNCTION TO CHECK THE STATUS OF USER SIGN IN / SIGN OUT 	
			firebase.auth().onAuthStateChanged(firebaseUser => {
				if (firebaseUser) {
					console.log(firebaseUser);
					var email = input_email.value;
					$('#inputemail').removeClass("showerror");
					$('#inputpassword').removeClass("showerror");
					$('#inputemail').addClass("hideerror");
					$('#inputpassword').addClass("hideerror");
					$('#login').removeClass("show_signout");
					$('#login').addClass("hide_signout");
					$('#login_popup').removeClass("show");
					$('#login_popup').addClass("hide");
					$('#signout').removeClass("hide_signout");
					$('#signout').addClass("show_signout");
					$('.fa-sign-in').removeClass("hide_signout");
					$('.fa-sign-in').addClass("show_signout");
					$('#username').html(firebaseUser.email);
					$('footer').css({
						"display": "block"
					});
					$('#welcome').removeClass("hide_signout");
					$('#welcome').addClass("show_signout");
					$('#scorediv').removeClass("hide_signout");
					$('#scorediv').addClass("show_signout");
				}
				else {
					console.log('not logged in');
					$('#signout').removeClass("show_signout");
					$('#signout').addClass("hide_signout");
					$('#login').removeClass("hide_signout");
					$('#login').addClass("show_signout");
					$('#login').css({
						"opacity": "1"
					});
					$('#username').html("");
					$('footer').css({
						"display": "block"
					});
					$('#welcome').removeClass("show_signout");
					$('#welcome').addClass("hide_signout");
					$('#scorediv').removeClass("show_signout");
					$('#scorediv').addClass("hide_signout");
				}
			});
			// SIGN OUT FUNCTION
			sign_out.addEventListener('click', e => {
				$('#inputemail').removeClass("showerror");
				$('#inputpassword').removeClass("showerror");
				$('#inputemail').addClass("hideerror");
				$('#inputpassword').addClass("hideerror");
				$('.errortext').html("");
				$('.errortext').removeClass("show");
				$('.errortext').addClass("hide");
				$('#welcome').removeClass("show_signout");
				$('#welcome').addClass("hide_signout");
				$('#scorediv').removeClass("show_signout");
				$('#scorediv').addClass("hide_signout");
				firebase.auth().signOut();
			});
			var timeout = false;

			function show_timer(min, secs) {
				var time_element = document.getElementById("time_countdown");
				time_element.innerHTML = "Tid kvar " + min + " : " + secs;
				secs--;
				if ((min >= 0) && (secs < 0)) {
					min--;
					secs = 59;
				}
				if ((min < 0) && (secs >= 0)) {
					clearTimeout();
					time_element.innerHTML = "time out";
					test.innerHTML = "<h1> You not answer in time. !! Please try again !! <h1>"
				}
				if ((min < 0) && (secs < 0)) {
					clearTimeout();
					timeout = true;
					time_element.innerHTML = "time out";
					test.innerHTML = "<h1> You not answer in time. !! Please try again !! <h1>"
				}
				var timeout = setTimeout('show_timer(' + min + ',' + secs + ')', 1000);
			}
