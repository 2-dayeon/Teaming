document.addEventListener('DOMContentLoaded', function() {
    // 프로필 이미지 변경 버튼 클릭 시 (실제 파일 업로드 로직은 백엔드 필요)
    const editProfileImageBtn = document.querySelector('.edit-profile-image-btn');
    editProfileImageBtn.addEventListener('click', function() {
        alert('프로필 이미지 변경 기능은 개발 예정입니다.');
        // 실제 구현 시 file input을 트리거하거나 모달 팝업을 띄울 수 있습니다.
    });

    // 언어 추가 기능
    const addSkillBtn = document.getElementById('add-skill-btn');
    const newSkillInput = document.getElementById('new-skill-input');
    const skillsList = document.getElementById('skills-list');

    addSkillBtn.addEventListener('click', function() {
        const skillText = newSkillInput.value.trim();
        if (skillText) {
            const skillItem = document.createElement('div');
            skillItem.classList.add('skill-item');
            skillItem.innerHTML = `
                <span>${skillText}</span>
                <button class="delete-skill-btn">
                    <img src="delete-icon.svg" alt="삭제 아이콘">
                </button>
            `;
            skillsList.appendChild(skillItem);
            newSkillInput.value = ''; // 입력창 초기화

            // 새로 추가된 스킬에 삭제 이벤트 리스너 추가
            skillItem.querySelector('.delete-skill-btn').addEventListener('click', function() {
                skillItem.remove();
            });
        }
    });

    // 기존 언어 삭제 기능 (초기 로드 시 존재하는 버튼에 이벤트 리스너 추가)
    document.querySelectorAll('.delete-skill-btn').forEach(button => {
        button.addEventListener('click', function() {
            button.closest('.skill-item').remove();
        });
    });

    // 프로필 저장 버튼 클릭 시
    const saveProfileBtn = document.querySelector('.save-profile-btn');
    saveProfileBtn.addEventListener('click', function() {
        // 여기에서 수정된 모든 정보를 가져와서 서버로 전송하는 로직을 구현합니다.
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const grade = document.getElementById('grade').value;
        const classNum = document.getElementById('class-num').value;
        const studentNum = document.getElementById('student-num').value;
        const selfIntroduction = document.getElementById('self-introduction').value;

        const skills = [];
        document.querySelectorAll('.skill-item span').forEach(span => {
            skills.push(span.textContent);
        });

        const profileData = {
            name: name,
            email: email,
            grade: grade,
            classNum: classNum,
            studentNum: studentNum,
            selfIntroduction: selfIntroduction,
            skills: skills
        };

        console.log('저장할 프로필 데이터:', profileData);
        alert('프로필이 저장되었습니다. (실제 저장 로직은 백엔드 필요)');
        // 실제 웹 애플리케이션에서는 fetch API 등을 사용하여 서버에 데이터를 전송합니다.
        /*
        fetch('/api/profile/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profileData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('프로필이 성공적으로 저장되었습니다!');
                // 페이지 리다이렉트 또는 UI 업데이트
            } else {
                alert('프로필 저장 실패: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error saving profile:', error);
            alert('프로필 저장 중 오류가 발생했습니다.');
        });
        */
    });

    // 프로필 편집 버튼 클릭 시 (현재는 저장 버튼만 있음. 편집 모드 전환이 필요하다면 여기에 로직 추가)
    const editButton = document.querySelector('.edit-button');
    // 현재는 모든 input이 기본적으로 편집 가능하므로, 이 버튼은 저장 버튼과 동일한 역할을 하거나
    // 읽기 전용/편집 모드 토글 기능을 구현할 때 사용될 수 있습니다.
    editButton.addEventListener('click', function() {
        // 예시: 저장 버튼과 동일한 역할
        saveProfileBtn.click();
    });
});